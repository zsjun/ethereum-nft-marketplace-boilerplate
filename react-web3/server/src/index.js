const Moralis = require("moralis").default;

const express = require("express");
const cors = require("cors");

const { EvmChain } = require("@moralisweb3/common-evm-utils");

const app = express();
const port = 4000;

// allow access to React app domain
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const MORALIS_API_KEY =
  "TbMhuBTwPYG053aXGln3a8FGI6NshUJ6PF4DgYRm0LewbeWSzIoYwRxNuAOUKlsl";
const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
const chain = EvmChain.ETHEREUM;

app.get("/balances", async (req, res) => {
  try {
    // Promise.all() for receiving data async from two endpoints
    const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
      chain,
      address,
    });
    const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
      chain,
      address,
    });

    res.status(200).json({
      // formatting the output
      address,
      nativeBalance: nativeBalance.result.balance.ether,
      tokenBalances: tokenBalances.result.map((token) => token.display()),
    });
  } catch (error) {
    // Handle errors
    console.error(123, error);
    res.status(500);
    res.json({ error: error.message });
  }
});

// app.get("/", (req, res) => {
//   console.log(123);
//   res.send("Hello World!");
// });

const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
    // formatEvmAddress: "checksum",
    // formatEvmChainId: "decimal",
    // logLevel: "verbose",
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();
