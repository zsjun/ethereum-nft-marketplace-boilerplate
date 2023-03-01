import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Menu, Layout } from "antd";
import Balances from "components/Balances";
import Logo from "./Logo";
import Footer from "./Footer";

import { createClient, configureChains, WagmiConfig, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

import Signin from "components/signin";
import User from "components/user";

import styles from "./app.module.css";

const router = createBrowserRouter([
  {
    path: "/balances",
    element: <Balances />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/user",
    element: <User />,
  },
  // {
  //   path: "/NFTMarketPlace",
  //   element: (
  //     <NFTTokenIds inputValue={inputValue} setInputValue={setInputValue} />
  //   ),
  // },
]);

const { Header, Content } = Layout;

function App() {
  const [inputValue, setInputValue] = useState("explore");
  const { provider, webSocketProvider } = configureChains(
    [mainnet],
    [publicProvider()]
  );

  const client = createClient({
    provider,
    webSocketProvider,
    autoConnect: true,
  });
  return (
    <div className={styles.rootWrap}>
      <Header className={styles.header}>
        <Logo />
      </Header>
      <Content className={styles.content}>
        <WagmiConfig client={client}>
          {/* <RouterProvider router={router} /> */}
          <Signin></Signin>
        </WagmiConfig>
      </Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
