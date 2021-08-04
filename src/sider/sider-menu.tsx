import { Menu } from "antd";
import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
  ul {
    background-color: #1d1667 !important;
    overflow: scroll;
  }
`;

const { SubMenu } = Menu;

const SiderMenu = () => {
  return (
    <MenuContainer>
      <Menu></Menu>
    </MenuContainer>
  );
};

export default SiderMenu;
