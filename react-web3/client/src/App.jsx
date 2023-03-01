import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Menu, Layout } from "antd";
import Balances from "components/Balances";
import NFTTokenIds from "components/NFTTokenIds";
import Logo from "./Logo";
import Footer from "./Footer";

import styles from "./app.module.css";

const router = createBrowserRouter([
  {
    path: "/balances",
    element: <Balances />,
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
  return (
    <div className={styles.rootWrap}>
      <Header className={styles.header}>
        <Logo />
      </Header>
      <Content className={styles.content}>
        <RouterProvider router={router} />
      </Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
