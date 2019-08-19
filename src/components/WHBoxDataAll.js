import React from 'react';
import { Tabs, Row, Col } from 'antd';
import WHBoxDataImageElement from './WHBoxDataImageElement';
import WHBoxDataOtherElement from './WHBoxDataOtherElement';
import WHBoxDataSoundElement from './WHBoxDataSoundElement';
import WHBoxDataVideoElement from './WHBoxDataVideoElement';

export default function WHBoxDataAll() {
  return (
    <Row gutter={16}>
      <WHBoxDataImageElement />
      <WHBoxDataSoundElement />
      <WHBoxDataVideoElement />
      <WHBoxDataOtherElement />
      <WHBoxDataVideoElement />
      <WHBoxDataOtherElement />
      <WHBoxDataImageElement />
      <WHBoxDataSoundElement />
      <WHBoxDataVideoElement />
      <WHBoxDataOtherElement />
      <WHBoxDataVideoElement />
      <WHBoxDataOtherElement />
      <WHBoxDataImageElement />
      <WHBoxDataSoundElement />
      <WHBoxDataVideoElement />
      <WHBoxDataOtherElement />
      <WHBoxDataVideoElement />
      <WHBoxDataOtherElement />
    </Row>
  );
}
