import React, { useState } from "react";
import { Layout, message } from "antd";
import styled from "styled-components";
import HeaderMenu from "./header";
import ContentLayout from "./content";
import SiderLayout from "./sider";

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
  const [selectedEquipment, setSelectedEquipment] = useState("");

  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <Layout>
        <AppContainer>
          <Header>
            <HeaderMenu></HeaderMenu>
          </Header>
          <Layout style={{ backgroundColor: " #0A465A" }}>
            <SiderLayout setSelectedEquipment={setSelectedEquipment} />
            <ContentLayout selectedEquipment={selectedEquipment} />
          </Layout>
        </AppContainer>
      </Layout>
    </React.Suspense>
  );
}

export default App;
