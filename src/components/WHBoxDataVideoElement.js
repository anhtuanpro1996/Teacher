import React from 'react';
import {Col, Dropdown } from 'antd';
import styleFileName from './common/commonStyle';
import PropTypes from 'prop-types';
import VideoContextMenu from './Context/VideoContextMenu';

export default function WHBoxDataVideoElement(props) {
  const videoData = props.videoData;
  const menu = <VideoContextMenu dataContext = {videoData}/>;
  return (
    <Dropdown overlay={menu} trigger={['contextMenu']}>
      <Col span={6}>
        <div className="data-element" style={dataElement}>
          <div className="image">
            <div className="wrapper-image" />
            <img src ="https://picsum.photos/id/1/200/200" style={thumbnail}/>
            <div className="icon" style={iconData} />
          </div>
          <div className="title-data" style={titleBlock}>
            <div className="icon" style={titleIcon} />
            <p style={titleName} title={videoData.name}>{videoData.name}</p>
          </div>
        </div>
      </Col>
    </Dropdown>
  );
}
const dataElement = {
  display: 'flex',
  flexDirection: 'column',
};

// const imageBlock = {
//   padding: '8px',
//   height: '144px',
// };

const thumbnail = {
  width: '100%',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const titleBlock = {
  borderTop: 'solid 1px #e8e8e8',
  padding: '12px 8px',
  display: 'flex',
};

const iconData = {
  width: '32px',
  height: '32px',
  backgroundColor: '#fff',
  WebkitMask: "url('/images/icon/play-circle.png') no-repeat 50% 50%",
  WebkitMaskSize: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginLeft: '-16px',
  marginTop: '-16px',
  zIndex: '2',
};


const titleIcon = {
  width: '24px',
  height: '24px',
  WebkitMask: "url('/images/icon/movie.png') no-repeat 50% 50%",
  backgroundColor: '#646d84',
  WebkitMaskSize: '100%',
  marginRight: '8px',
};

const titleName = {...styleFileName, height: '18px'};

WHBoxDataVideoElement.propTypes = {
  videoData: PropTypes.object.isRequired,
};
