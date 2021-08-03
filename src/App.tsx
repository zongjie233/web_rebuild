import React from "react";
import { Layout, message } from "antd";
import styled from "styled-components";
import HeaderMenu from "./header";

const { Header, Sider, Content } = Layout;

const AppContainer = styled.div`
  .ant-layout {
    height: 100%;
    overflow: hidden;
  }
  .ant-layout-header {
    height: 100px;
    background-color: #301e58;
    padding: 0px;
  }
`;
// #0A465A

function App() {
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      APP...
      <Layout>
        <AppContainer>
          <Header>
            <HeaderMenu></HeaderMenu>
          </Header>
          <Layout style={{ backgroundColor: " #0A465A" }}></Layout>
        </AppContainer>
      </Layout>
    </React.Suspense>
  );
}

export default App;
