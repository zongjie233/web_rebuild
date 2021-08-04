import React, { FC } from "react";
import styled from "styled-components";
import moment from "moment";

// interface IProps {}

const Container = styled.div`
  color: #303f9f;
`;
// TODO: 重写currenttime模块
const CurrentTime = () => {
  return <Container>{moment().format("YYYY-MM-DD HH:mm:ss")}</Container>;
};
export default CurrentTime;
