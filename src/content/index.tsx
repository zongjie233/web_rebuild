import { Layout } from "antd";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import HistoryData from "./history-data";
import RealTimeMonitor from "./realtime-monitor";
import SystemSetting from "./system-setting";
import useTabBar from "../models/use-tabbar";
import ActionBar from "./action-bar";

interface IProps {
  selectedEquipment?: string;
}

const ContentBox = styled.div`
  padding: 20px 0px;
  width: 100%;
  height: 100%;
`;
const { Content } = Layout;

const ContentLayout: FC<IProps> = ({ selectedEquipment }) => {
  const { activeBar, setActiveBar } = useTabBar();
  let Bar = null;
  switch (activeBar) {
    case "realtime-monitor":
      /* @ts-ignore */
      Bar = <RealTimeMonitor selectedEquipment={selectedEquipment} />;
      break;
    case "history-data":
      Bar = <HistoryData />;
      break;
    case "system-setting":
      Bar = <SystemSetting />;
      break;
    default:
      break;
  }

  return (
    <ContentBox>
      <Content>
        <ActionBar changeBar={setActiveBar} activeBar={activeBar} />
        {Bar}
      </Content>
    </ContentBox>
  );
};
export default ContentLayout;
