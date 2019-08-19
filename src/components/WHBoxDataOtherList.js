import React from 'react';
import { Row } from 'antd';
import WHBoxDataOtherElement from './WHBoxDataOtherElement';

export default function WHBoxDataOtherList() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <Row gutter={16}>
      {arr.map((item, index) => {
        return (
          <WHBoxDataOtherElement key={index} index={index} />
        );
      })}
    </Row>
  );
}
