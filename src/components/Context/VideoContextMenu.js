import React, { useState } from 'react';
import './ImageContext.css';
import { Modal } from 'antd';
import { bindActionCreators } from 'redux';
import { changeNameFile, removeFile, downloadFile, copyFile } from '../../actions/thunks/fileContextAction';
import { getListFolderForContext } from '../../actions/thunks/fileContextAction';
import { connect } from 'react-redux';
import * as URL from  '../../constants/Url';
import MoveToContext from './MoveToContext';
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
const moveTo = {
  width: '100px',
  height: '200px',
  backgroundColor: 'blue',
};
const VideoContextMenu = (props) => {
  const listBreadcumb = props.childFolderData.breadcumb;
  const currentFolder = listBreadcumb[listBreadcumb.length - 1];
  const [moveToValue, movedHandle] = useState(false);
  const [hiddenContext, clickHandle] = useState(false);
  const [visibleDetail, showModalDetail] = useState(false);
  const [visibleRemove, showModalRemove] = useState(false);
  const [visibleChangeName, showModalChangeName] = useState(false);
  const [valueInputChangeName, setValueInputChangeName] = useState('');

  const detailClicked = () => {
    showModalDetail(true);
    clickHandle(true);
  };
  const moveToClick = () => {
    movedHandle(true);
    clickHandle(true);
    const folderID = props.childFolderData.datas.id;
    const breadcumbs = props.childFolderData.breadcumb;
    props.fileMoveTo(folderID, breadcumbs);
    clickHandle(false);
  };

  const removeClicked = () => {
    showModalRemove(true);
    clickHandle(true);
  };

  const changeNameClicked = () => {
    showModalChangeName(true);
    clickHandle(true);
    setValueInputChangeName(props.dataContext.name);
  };

  const clickedCloseModalDetail = () => {
    showModalDetail(false);
    clickHandle(false);
  };

  const clickedCloseModalRemove = () => {
    showModalRemove(false);
    clickHandle(false);
  };

  const clickedCloseModalChangeName = () => {
    showModalChangeName(false);
    clickHandle(false);
  };


  const renderDetailModal = () => {
    return (
      <Modal className="detail-modal" visible={visibleDetail}>
        <div className="header" style = {headerModal}>
          <div className="title" style={titleModal}>
            <div className="icon" style={headerIcon} />
            <p style={headerName} title={props.dataContext.name}>{props.dataContext.name}</p>
          </div>
          <div onClick={() => clickedCloseModalDetail()} style={closeModal}/>
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
            <img src={props.dataContext.url} style={mediaContent}/>
          </div>
        </div>
      </Modal>
    );
  };
  const renderRemoveFile = () => {
    return (
      <Modal className="remove-modal" visible={visibleRemove}>
        <div className="header">
          <div onClick={() => clickedCloseModalRemove()} className="close-modal"/>
        </div>
        <div className="content">
          <div className="title">Thầy/Cô có chắc chắn xóa tệp này không</div>
          <div className="action-btn">
            <div className="agree-btn">
              <div className="name" onClick={() => confirmRemoveFile()}>Đồng ý</div>
            </div>
            <div className="cancel-btn" onClick={() => clickedCloseModalRemove()}>
              <div className="name">Hủy bỏ</div>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  const confirmRemoveFile = () => {
    props.removeFile(props.dataContext.id, currentFolder.id, listBreadcumb);
    showModalRemove(false);
    clickHandle(false);
  };

  const confirmChangeName = () => {
    props.changeNameFile(props.dataContext.id, valueInputChangeName, currentFolder.id, listBreadcumb);
    showModalChangeName(false);
    clickHandle(false);
  };

  const renderChangeName = () => {
    return (
      <Modal className="change-name-modal" visible={visibleChangeName}>
        <div className="content">
          <div className="title">Đổi tên</div>
          <input className="input-value" defaultValue={valueInputChangeName} onChange={(e) => setValueInputChangeName(e.target.value)}/>
          <div className="action-btn">
            <div className="cancel-btn" onClick={() => clickedCloseModalChangeName()}>
              <div className="name">Hủy bỏ</div>
            </div>
            <div className="agree-btn">
              <div className="name" onClick={() => confirmChangeName()}>Đồng ý</div>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  const downloadFileBtn = () => {
    const url = URL.DOWNLOAD_FILE + props.dataContext.id + '/download';
    window.location.href = url;
  };

  const copyFileBtn = () => {
    const initData = {
      'folder_id': currentFolder.id,
      'file_id': props.dataContext.id,
    };
    props.copyFile(initData, currentFolder.id, listBreadcumb);
  };
  const renderMoveTo = () => {
    let dataForMoveTo = {};
    if (props.dataForMoveTo.loading) {
      dataForMoveTo = props.dataForMoveTo;
      return (
        <React.Fragment>
          {moveToValue ? <MoveToContext dataFile={props.dataContext} /> : ''}
        </React.Fragment>
      );
    }
  };
  const renderContextMenu = () => {
    return (
      <React.Fragment>
        <div className="contextMenu"  >
          <div className="content-top">
            <div className="itemContext" onClick={() => moveToClick()}>Di Chuyển tới</div>
            <div className="itemContext" onClick={() => changeNameClicked()}>Đổi tên</div>
            <div className="itemContext" onClick={() => copyFileBtn()}>Sao chép</div>
            <div className="itemContext" onClick={() => detailClicked()}>Chi tiết</div>
            <div className="itemContext" onClick={() => downloadFileBtn()}>Tải xuống</div>
            <div className="itemContext" onClick={() => removeClicked()}>Xóa</div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  const initContexMenu = () => {
    return (
      <React.Fragment>
        {renderContextMenu()}
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      {hiddenContext ? '' : initContexMenu()}
      {renderMoveTo()}
      {renderDetailModal()}
      {renderRemoveFile()}
      {renderChangeName()}
    </React.Fragment>
  );
};


const mapStateToProps = (state) => {
  return {
    contextFileReducer: state.contextFileReducer,
    childFolderData: state.childFolderReducer,
    dataForMoveTo: state.listFolderForContextReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changeNameFile: changeNameFile, removeFile: removeFile, downloadFile: downloadFile, copyFile: copyFile, fileMoveTo: getListFolderForContext}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoContextMenu);