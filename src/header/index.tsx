import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Badge, Space } from "antd";
import styled from "styled-components";
import useMenu from "../models/user-menu";
import CurrentTime from "./current-time";
import UserLogined from "./user-login";
import useWarnRecords from "../models/use-warn-records";
import useTabBar from "../models/use-tabbar";
const { Title } = Typography;

const HeaderContainer = styled.div`
  .right {
    float: right;
    margin-left: auto;
    overflow: hidden;
  }
  .ant-typography {
    color: #00fff4;
  }
  .ant-typography.main-title {
    text-align: center;
    margin-top: 5px;
  }
  .ant-typography.sub-title {
    font-size: 15px;
    text-align: center;
    top: -4px;
    margin-top: -10px;
  }
  .right-panel {
    padding: 0px 30px;
    height: 80px;
    font-size: 19px;
    top: 0;
    right: 20px;
    position: absolute;
  }
  .right-panel .ant-space-item .badge-count {
    color: #296fb2;
    font-size: 19px;
    text-align: center;
  }
  .right-panel-time {
    padding: 0px 30px;
    cursor: pointer;
  }
`;

const HeaderMenu = () => {
  const { setActiveBar } = useTabBar();
  const { records } = useWarnRecords();
  const [alarmNum, setAlarmNumCount] = useState(0);

  /*  useEffect(() => {
    getAlarmNum().then((resp) => {
      const result = resp.result.num;
      setAlarmNumCount(result);
    });
  }, []); */

  return (
    <HeaderContainer className="right">
      <Row>
        <Col span={24}>
          <Title className="main-title">变电站声学检测系统</Title>
          <Title className="sub-title" level={4}>
            Acoustic detection system for Substation
          </Title>
          <Space className="right-panel" align="end">
            <span
              className="right-panel-time"
              onClick={() => setActiveBar("history-data")}
            >
              <Badge
                count={records.length}
                className="badge-count"
                offset={[15, 0]}
              >
                <span>报警数目</span>&nbsp;&nbsp;
                <span>{alarmNum}</span>
              </Badge>
            </span>
            <CurrentTime />
            <UserLogined />
          </Space>
        </Col>
      </Row>
    </HeaderContainer>
  );
};

export default HeaderMenu;
