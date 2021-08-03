import { Layout } from "antd";
import React from "react";
import styled from "styled-components";
import useMenu from "../models/usermenu";
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

const HeaderMenu = () => {
  // const { setTreeData } = useMenu();

  return <div>app</div>;
};

export default HeaderMenu;
