import React from 'react';
import { Tabs,Row,Col } from 'antd';
import WHBoxDataImageElement from './WHBoxDataImageElement';

export default function WHBoxDataImageList(){
  let arr = [1,2,3,4,5,6];
  return(
    <Row gutter={16}>
      {arr.map((item,index) => {
        return(
          <WHBoxDataImageElement key={index} index={index} />
        )
      })}
    </Row>
  );
}
