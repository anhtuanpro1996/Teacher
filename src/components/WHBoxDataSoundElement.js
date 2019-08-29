import React from 'react';
import {Col } from 'antd';
import styleFileName from './common/commonStyle';
import PropTypes from 'prop-types';


const iconData = {
  width: '72px',
  height: '72px',
  backgroundColor: '#b0b5c1',
  WebkitMask: "url('/images/icon/library-music.png') no-repeat 50% 50%",
  WebkitMaskSize: '100%',
};
const thumbnail = {
  width: '100%',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  padding: '8px',
};
// const imageBlock = {
//   padding: '8px',
// };
const titleBlock = {
  borderTop: 'solid 1px #e8e8e8',
  padding: '12px 8px',
  display: 'flex',
};

const titleIcon = {
  width: '24px',
  height: '24px',
  WebkitMask: "url('/images/icon/library-music-24-px.png') no-repeat 50% 50%",
  backgroundColor: '#646d84',
  WebkitMaskSize: '100%',
  marginRight: '8px',
};

const titleName = styleFileName;
export default function WHBoxDataSoundElement(props) {
  const audioData = props.audioData;
  return (
    <Col span={6}>
      <div className="data-element">
        <div className="image">
          <div className="thumbnail" style={thumbnail}>
            <div className="icon" style={iconData} />
          </div>
        </div>
        <div className="title-data" style={titleBlock}>
          <div className="icon" style={titleIcon} />
          <p style={titleName} title={audioData.name}>{ audioData.name }</p>
        </div>
      </div>
    </Col>
  );
}

WHBoxDataSoundElement.propTypes = {
  audioData: PropTypes.object.isRequired,
};
