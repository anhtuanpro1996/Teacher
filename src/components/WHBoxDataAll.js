import React from 'react';
import { Row } from 'antd';
import WHBoxDataImageElement from './WHBoxDataImageElement';
import WHBoxDataOtherElement from './WHBoxDataOtherElement';
import WHBoxDataSoundElement from './WHBoxDataSoundElement';
import WHBoxDataVideoElement from './WHBoxDataVideoElement';

export default function WHBoxDataAll(props) {
  const files = props.dataFolder.files;
  return (
    <Row gutter={16}>
      {(files) ? renderBoxData(files) : loading()}
    </Row>
  );
}

const renderBoxData = (arr) => {
  return (
    <div>
      {arr.map((value, index)=>{
        return <div key={index}>{conditionFilter(value)}</div>;
      })}
    </div>
  );
};

const conditionFilter = (data) => {
  switch (data.fileType) {
  case 'IMAGE':
    return <WHBoxDataImageElement imageData={data}/>;
  case 'VIDEO':
    return <WHBoxDataVideoElement />;
  case 'AUDIO':
    return <WHBoxDataSoundElement />;
  case 'OTHER':
    return <WHBoxDataOtherElement />;
  default:
    return (
      'No Thing'
    );
  };
};

const loading = () => {
  return (
    <div className="loader"/>
  );
};
