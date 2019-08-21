import React from 'react';
import { Row } from 'antd';
import WHBoxDataOtherElement from './WHBoxDataOtherElement';
import PropTypes from 'prop-types';


export default function WHBoxDataOtherList(props) {
  const listOther = props.dataFolder.files.filter((value)=>{
    return value.fileType === 'OTHER';
  });
  return (
    <Row gutter={16}>
      {listOther.map((item, index) => {
        return (
          <WHBoxDataOtherElement otherData={item} key={index} index={index} />
        );
      })}
    </Row>
  );
}

WHBoxDataOtherList.propTypes = {
  dataFolder: PropTypes.object.isRequired,
};
