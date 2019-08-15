import React from 'react';
import { Tabs,Row,Col } from 'antd';
import WHBoxDataSoundElement from './WHBoxDataSoundElement';

export default function WHBoxDataSoundList(){
  let arr = [1,2,3,4,5];
  return(
    <Row gutter={16}>
      {arr.map((item,index) => {
        return(
          <WHBoxDataSoundElement key={index} index={index} />
        )
      })}
    </Row>
  );
}
