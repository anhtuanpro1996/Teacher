import React, { useState } from 'react';
import { Modal } from 'antd';

const headerModal = {
  width: '100%',
  height: '56px',
  display: 'flex',
  borderBottom: 'solid 1px #979797',
  padding: '16px 8px 16px 16px',
  justifyContent: 'space-between',
};
const headerIcon = {
  width: '24px',
  height: '24px',
  WebkitMask: "url('/images/icon/collections.png') no-repeat 50% 50%",
  backgroundColor: '#646d84',
  WebkitMaskSize: '100%',
  marginRight: '8px',
};
const headerName = {

};

const closeModal = {
  width: '24px',
  height: '24px',
  WebkitMask: "url('/images/icon/closeimg.png') no-repeat 50% 50%",
  backgroundColor: '#232731',
  WebkitMaskSize: '100%',
};

const titleModal = {
  display: 'flex',
};

const contentModal = {
  width: '100%',
  height: '131px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '11px 16px 16px 16px',
};


const mediaContent = {
  width: '133px',
  height: '100px',
  borderRadius: '8px',

};
const contentTable = {
  display: 'table',
  height: '24px',
  lineHeight: '1.71',
  marginBottom: '16px',
};
const tableTitle = {
  display: 'table-cell',
  minWidth: '140px',

};
const tableValue = {
  fontSize: '14px',
  fontWeight: '600',
};
const ImageDetail = (props) => {
  const dataRender = props.dataRender;
  // const [closed, closeButton] = useState(false);

  return (
    <Modal className="detail-modal" visible={props.visible}>
      <div className="header" style = {headerModal}>
        <div className="title" style={titleModal}>
          <div className="icon" style={headerIcon} />
          <p style={headerName} title="aaaaa">{dataRender.name}</p>
        </div>
        <div  style={closeModal}/>
      </div>
      <div className="content" style={contentModal} >
        <div className="text">
          <div style={contentTable}>
            <div style={tableTitle}>Định dạng</div>
            <div style={tableValue}>PNG</div>
          </div>
          <div style={contentTable}>
            <div style={tableTitle}>Dung lượng</div>
            <div style={tableValue}>1024 MB</div>
          </div>
          <div style={contentTable}>
            <div style={tableTitle}>Ngày tạo</div>
            <div style={tableValue}>12/04/2019</div>
          </div>
        </div>
        <div className="media" >
          <img src={dataRender.url} style={mediaContent}/>
        </div>
      </div>
    </Modal>
  );
};

export default ImageDetail;
