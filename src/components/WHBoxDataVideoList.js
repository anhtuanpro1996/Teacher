import React from 'react';
import { Tabs, Row, Col } from 'antd';
import WHBoxDataVideoElement from './WHBoxDataVideoElement';

export default function WHBoxDataVideoList() {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <Row gutter={16}>
      {arr.map((item, index) => {
        return (
          <WHBoxDataVideoElement key={index} index={index} />
        );
      })}
    </Row>
  );
}
