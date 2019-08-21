import React from 'react';
import { Row } from 'antd';
import WHBoxDataSoundElement from './WHBoxDataSoundElement';
import PropTypes from 'prop-types';


export default function WHBoxDataSoundList(props) {
  const listAudio = props.dataFolder.files.filter((value)=>{
    return value.fileType === 'AUDIO';
  });
  return (
    <Row gutter={16}>
      {listAudio.map((item, index) => {
        return (
          <WHBoxDataSoundElement audioData={item} key={index} index={index} />
        );
      })}
    </Row>
  );
}


WHBoxDataSoundList.propTypes = {
  dataFolder: PropTypes.object.isRequired,
};
