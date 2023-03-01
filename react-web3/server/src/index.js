const Moralis = require("moralis").default;

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

// to use our .env variables
require("dotenv").config();

const { EvmChain } = require("@moralisweb3/common-evm-utils");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cookieParser());
// allow access to React app domain
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const config = {
  domain: process.env.APP_DOMAIN,
  statement: "Please sign this message to confirm your identity.",
  uri: process.env.REACT_URL,
  timeout: 60,
};

// const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
// const chain = EvmChain.ETHEREUM;

// app.get("/balances", async (req, res) => {
//   try {
//     // Promise.all() for receiving data async from two endpoints
//     const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
//       chain,
//       address,
//     });
//     const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
//       chain,
//       address,
//     });

//     res.status(200).json({
//       // formatting the output
//       address,
//       nativeBalance: nativeBalance.result.balance.ether,
//       tokenBalances: tokenBalances.result.map((token) => token.display()),
//     });
//   } catch (error) {
//     // Handle errors
//     console.error(123, error);
//     res.status(500);
//     res.json({ error: error.message });
//   }
// });

app.post("/request-message", async (req, res) => {
  const { address, chain, network } = req.body;

  try {
    const message = await Moralis.Auth.requestMessage({
      address,
      chain,
      network,
      ...config,
    });

    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
});
app.post("/verify", async (req, res) => {
  try {
    const { message, signature } = req.body;

    const { address, profileId } = (
      await Moralis.Auth.verify({
        message,
        signature,
        networkType: "evm",
      })
    ).raw;

    const user = { address, profileId, signature };

    // create JWT token
    const token = jwt.sign(user, process.env.AUTH_SECRET);

    // set JWT cookie
    res.cookie("jwt", token, {
      httpOnly: true,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
});
app.get("/authenticate", async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) return res.sendStatus(403); // if the user did not send a jwt token, they are unauthorized

  try {
    const data = jwt.verify(token, process.env.AUTH_SECRET);
    res.json(data);
  } catch {
    return res.sendStatus(403);
  }
});

app.get("/logout", async (req, res) => {
  try {
    res.clearCookie("jwt");
    return res.sendStatus(200);
  } catch {
    return res.sendStatus(403);
  }
});
// app.get("/", (req, res) => {
//   console.log(123);
//   res.send("Hello World!");
// });

const startServer = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
    // formatEvmAddress: "checksum",
    // formatEvmChainId: "decimal",
    // logLevel: "verbose",
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();
