import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Button, Input } from "antd";

const SettingContainer = styled.div`
  background-color: #1c1566;
  margin: 0px 30px 10px 30px;
  text-align: center;
  height: 100%;
  overflow-y: scroll;
  bottom: 0;
  .ant-card,
  .ant-card-bordered {
    background-color: #1c1566;
  }
  .row-padding {
    padding: 20px 20px 10px;
  }
  .sub-row-padding {
    padding: 5px 0;
  }

  .ant-card-body {
    height: 150px;
  }
  .card-buttons {
    height: 55px;
    width: 100%;
    padding: 20px 70px 0px 0px;
  }
  .card-buttons button {
    float: right;
    margin: 0px 10px;
  }
  .ant-card-head {
    min-height: 30px;
    border-bottom: 1px solid #07efe2;
  }
  .ant-card-bordered {
    border: 1px solid #07efe2;
  }
  .ant-card-head-title {
    color: #fff;
    font-size: 20px;
    padding: 0px;
  }
  .ant-card-body {
    color: #fff;
  }
  .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
  }
`;

const System = () => {
  return (
    <SettingContainer>
      <div className="card-buttons">
        <Button type="primary" onClick={saveParamsSettings}>
          保存
        </Button>
        <Button type="primary">取消</Button>
      </div>
      <Row className="row-padding">
        <Col span={10} offset={1}>
          <Card title="采集设置">
            <Row align="middle" className="sub-row-padding">
              <Col span={6} offset={1}>
                <span className="title">灵敏度</span>
              </Col>
              <Col span={15}>
                <Input size="small" value={acqData.Rr} onChange={onRrChange} />
              </Col>
            </Row>
            <Row align="middle" className="sub-row-padding">
              <Col span={6} offset={1}>
                <span className="title">采样率</span>
              </Col>
              <Col span={15}>
                <Input size="small" value={acqData.SR} onChange={onSrChange} />
              </Col>
            </Row>
            <Row align="middle" className="sub-row-padding">
              <Col span={6} offset={1}>
                <span className="title">信噪比</span>
              </Col>
              <Col span={15}>
                <Input
                  size="small"
                  value={acqData.SNR}
                  onChange={onSNRChange}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={10} offset={2}>
          <Card title="报警设置">
            <Row
              align="middle"
              className="sub-row-padding"
              style={{ paddingTop: "20px" }}
            >
              <Col span={6} offset={1}>
                <span className="title"> 频率报警区域</span>
              </Col>
              <Col span={7}>
                <Input
                  size="small"
                  prefix="上限"
                  suffix="HZ"
                  value={alarmData.up}
                  onChange={onUpChange}
                />
              </Col>
              <Col span={7} offset={1}>
                <Input
                  size="small"
                  prefix="下限"
                  suffix="HZ"
                  value={alarmData.down}
                  onChange={onDownChange}
                />
              </Col>
            </Row>
            <Row
              align="middle"
              className="sub-row-padding"
              style={{ paddingTop: "10px" }}
            >
              <Col span={6} offset={1}>
                <span className="title"> 最大报警分贝</span>
              </Col>
              <Col span={15}>
                <Input
                  size="small"
                  value={alarmData.db}
                  onChange={onDbChange}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </SettingContainer>
  );
};

export default System;
