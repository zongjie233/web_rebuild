import React from "react";
import styled from "styled-components";

const MonitorContainer = styled.div`
  background-color: #1c1566;
  padding: 10px 0px;
  margin: 30px 30px;
  height: calc(100vh - 250px);
  overflow-y: scroll;
  text-align: center;
  bottom: 0;
  .ant-card,
  .ant-card-bordered {
    background-color: #1c1566;
  }
  .row-padding {
    padding: 10px 0px;
  }
  .sub-row-padding {
    padding: 5px 0;
  }

  .ant-card-body {
    height: 180px;
  }
  .card-buttons {
    height: 55px;
    width: 100%;
    padding: 10px 70px 0px 0px;
  }
  .card-buttons button {
    float: right;
    margin: 0px 10px;
  }
  .ant-card-head {
    border-bottom: 1px solid #07efe2;
  }
  .ant-card-bordered {
    border: 1px solid #07efe2;
  }
  .ant-card-head-title {
    color: #fff;
    font-size: 20px;
  }
  .ant-card-body {
    color: #fff;
  }
  .monitor-charts {
    background-image: url("/assets/charts.png");
  }
  .sub-name {
    font-size: 25px;
    color: #27edf5;
    text-align: center;
    line-height: 100px;
    margin-left: 30px;
  }
  img {
    width: 100%;
    height: 100px;
  }
  .text-show-panel {
    float: right;
    color: #f5f6f4;
    margin-top: -150px;
    margin-right: 250px;
  }

  .charts-title {
    color: #f5f6f4;
    font-size: 26px;
    text-align: center;
    margin-top: 20px;
  }
  .time-line {
    color: #f5f6f4;
    font-size: 18px;
    text-align: right;
    padding-right: 40px;
    margin-top: 40px;
  }
  .time-line span {
    border: 1px solid #14659c;
    width: 30px;
    height: 30px;
    display: inline-block;
    text-align: center;
    margin: 0px 2px;
    border-radius: 5px;
  }
`;
const RealTimeMonitor = () => {
  return <div>RealTimeMonitor</div>;
};

export default RealTimeMonitor;
