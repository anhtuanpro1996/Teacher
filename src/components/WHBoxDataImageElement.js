import React from 'react';
import { Col } from 'antd';
import styleFileName from '../components/common/commonStyle';
import PropTypes from 'prop-types';

export default function WHBoxDataImageElement(props) {
  const imageData = props.imageData;
  return (
    <Col span={6}>
      <div className="data-element">
        <div className="image" style={imageBlock}>
          <img src={imageData.url} style={thumbnail}/>
        </div>
        <div className="title-data" style={titleBlock}>
          <div className="icon" style={titleIcon} />
          <p style={titleName} title={imageData.name}>{imageData.name}</p>
        </div>
      </div>
    </Col>
  );
}

const thumbnail = {
  width: '100%',
  height: '128px',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const imageBlock = {
  padding: '8px',
};
const titleBlock = {
  borderTop: 'solid 1px #e8e8e8',
  padding: '8px',
  display: 'flex',
};

const titleIcon = {
  width: '24px',
  height: '24px',
  WebkitMask: "url('/images/icon/collections.png') no-repeat 50% 50%",
  backgroundColor: '#646d84',
  WebkitMaskSize: '100%',
  marginRight: '8px',
};

const titleName = styleFileName;

WHBoxDataImageElement.propTypes = {
  imageData: PropTypes.object.isRequired,
};
