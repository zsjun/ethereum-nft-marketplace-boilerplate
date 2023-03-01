import { useEffect, useState } from "react";
// import { useMoralis } from "react-moralis";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Logo from "./Logo";
// import Account from "components/Account";
// import Chains from "components/Chains";
// import NFTBalance from "components/NFTBalance";
// import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout } from "antd";
// import SearchCollections from "components/SearchCollections";
// import NativeBalance from "components/NativeBalance";
import Balances from "components/balances";
// import Text from "antd/lib/typography/Text";
// import NFTMarketTransactions from "components/NFTMarketTransactions";

import "antd/dist/reset.css";
import styles from "./app.module.css";

const { Header, Content, Footer } = Layout;

const App = ({ isServerInfo }) => {
  // const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
  //   useMoralis();

  const [inputValue, setInputValue] = useState("explore");

  // useEffect(() => {
  //   if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthenticated, isWeb3Enabled]);

  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header className={styles.header}>
          <Logo />
          {/* <SearchCollections setInputValue={setInputValue} /> */}
          {/* <Menu
            theme="light"
            mode="horizontal"
            style={{
              display: "flex",
              fontSize: "17px",
              fontWeight: "500",
              marginLeft: "50px",
              width: "100%",
            }}
            defaultSelectedKeys={["nftMarket"]}
          >
            <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")}>
              <NavLink to="/NFTMarketPlace">🛒 Explore Market</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance">🖼 Your Collection</NavLink>
            </Menu.Item>
            <Menu.Item key="transactions">
              <NavLink to="/Transactions">📑 Your Transactions</NavLink>
            </Menu.Item>
            <Menu.Item key="transactions">
              <NavLink to="/balances">📑 Your Transactions</NavLink>
            </Menu.Item>
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            <NativeBalance />
            <Account />
          </div> */}
        </Header>
        <Content className={styles.content}>
          {/* <Routes> */}
          {/* <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </Route>
            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route> */}
          {/* <Route path="/balances">
              <Balances />
            </Route>
          </Routes> */}
          {/* <Navigate to="/NFTMarketPlace" /> */}
          {/* <Navigate to="/balances" /> */}
        </Content>
      </Router>
      {/* <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
          ⭐️ Please star this{" "}
          <a
            href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            boilerplate
          </a>
          , every star makes us very happy!
        </Text>

        <Text style={{ display: "block" }}>
          🙋 You have questions? Ask them on the {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29"
          >
            Moralis forum
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          📖 Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
          >
            Moralis
          </a>
        </Text>
      </Footer> */}
    </div>
  );
};

export default App;
