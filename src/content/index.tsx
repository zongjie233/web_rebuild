import React, { FC, ReactElement } from "react";
import HistoryData from "./history-data";
import RealTimeMonitor from "./realtime-monitor";
import SystemSetting from "./system-setting";

interface IProps {}

const ContentLayout: FC<IProps> = ({}): ReactElement => {
  return (
    <div>
      ContentLayout
      <HistoryData />
      <SystemSetting />
      <RealTimeMonitor />
    </div>
  );
};
export default ContentLayout;
