import React from 'react';
import {Col } from 'antd';


const iconData={
  width: '72px',
  height: '72px',
  backgroundColor: '#b0b5c1',
  WebkitMask:"url('/images/icon/file-copy.png') no-repeat 50% 50%",
  WebkitMaskSize: '100%',
  marginRight: '8px'
}
const thumbnail={
  width:'100%',
  height:'128px',
  backgroundRepeat: 'no-repeat',
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const imageBlock = {
  padding: '8px'
}
const titleBlock = {
  borderTop: 'solid 1px #e8e8e8',
  padding: '8px',
  display:'flex'
}

const titleIcon = {
  width:'24px',
  height:'24px',
  WebkitMask:"url('/images/icon/file-copy-24-px.png') no-repeat 50% 50%",
  backgroundColor: '#646d84',
  WebkitMaskSize: '100%',
  marginRight: '8px'
}

const titleName = {
  height: '14px',
  opacity: '0.9',
  lineHeight: '1.71',
  fontSize: '14px',
  fontWeight: '600',
  color: '#4a4a4a',
  fontFamily: 'Open Sans, sans-serif',

}
export default function WHBoxDataOtherElement(){
  return(
    <Col span={6}>
      <div className="data-element">
        <div className="image" style={imageBlock}>
          <div className="thumbnail" style={thumbnail}>
            <div className="icon" style={iconData}></div>
          </div>
        </div>
        <div className="title-data" style={titleBlock}>
          <div className="icon" style={titleIcon}></div>
          <p style={titleName}>Tên file zip</p>
        </div>
      </div>
    </Col>
  );
}
