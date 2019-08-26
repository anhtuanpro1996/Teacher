import React from 'react';
import { Row } from 'antd';
import WHBoxDataImageElement from './WHBoxDataImageElement';
import WHBoxDataOtherElement from './WHBoxDataOtherElement';
import WHBoxDataSoundElement from './WHBoxDataSoundElement';
import WHBoxDataVideoElement from './WHBoxDataVideoElement';
import PropTypes from 'prop-types';

export default function WHBoxDataAll(props) {
  const files = props.dataFiles;
  return (
    <Row gutter={16}>
      {(files) ? renderBoxData(files) : loading()}
    </Row>
  );
}

const renderBoxData = (arr) => {
  return (
    <React.Fragment>
      {arr.map((value, index)=>{
        return <React.Fragment key={index}>{conditionFilter(value)}</React.Fragment>;
      })}
    </React.Fragment>
  );
};

const conditionFilter = (data) => {
  switch (data.fileType) {
  case 'IMAGE':
    return <WHBoxDataImageElement imageData={data}/>;
  case 'VIDEO':
    return <WHBoxDataVideoElement videoData={data} />;
  case 'AUDIO':
    return <WHBoxDataSoundElement audioData={data}/>;
  case 'OTHER':
    return <WHBoxDataOtherElement otherData={data} />;
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

WHBoxDataAll.propTypes = {
  dataFiles: PropTypes.array.isRequired,
};
