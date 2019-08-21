import React from 'react';
import { Row } from 'antd';
import WHBoxDataVideoElement from './WHBoxDataVideoElement';
import PropTypes from 'prop-types';

export default function WHBoxDataVideoList(props) {
  const listVideo = props.dataFolder.files.filter((value)=>{
    return value.fileType === 'VIDEO';
  });
  return (
    <Row gutter={16}>
      {listVideo.map((item, index) => {
        return (
          <WHBoxDataVideoElement videoData ={item} key={index} index={index}  />
        );
      })}
    </Row>
  );
}


WHBoxDataVideoList.propTypes = {
  dataFolder: PropTypes.object.isRequired,
};
