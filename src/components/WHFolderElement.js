import React from 'react'
import { Col } from 'antd';
import PropTypes from 'prop-types';
const iconFolder = {
  width: '32px',
  height: '32px',
  backgroundColor: '#646d84',
  WebkitMask:"url('/images/icon/folder.png') no-repeat 50% 50%",
  WebkitMaskSize: '100%',
  marginRight: '8px',
};
export default function CourseElement(folder) {
  console.log('quanbh-folder', folder);
  return (
    <Col className="ant-col-8-cus" span={8}>
      <div className="course-element">
        <div className="folder-icon" style={iconFolder}/>
        <p className="folder-name">
          {folder.folder.name}
        </p>
      </div>
    </Col>
  );
}

CourseElement.propTypes = {
  index: PropTypes.number.isRequired,
};
