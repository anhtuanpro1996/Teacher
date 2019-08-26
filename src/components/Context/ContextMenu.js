import React, { useState } from 'react';
import './ContextMenu.css';
import ImageDetail from './ImageDetail';

const moveTo = {
  width: '100px',
  height: '200px',
  backgroundColor: 'blue',
};
export default function ContextMenu(props) {
  console.log('ContextMenu', props);

  const [moveToValue, movedHandle] = useState(false);
  const [hiddenContext, clickHandle] = useState(false);
  const [visible, showModal] = useState(false);

  const detailClicked = () => {
    showModal(true);
    clickHandle(true);
  };

  const moveToClick = () => {
    movedHandle(true);
    clickHandle(true);
  };

  const renderDetailModal = () => {
    return (
      <ImageDetail visible={visible} dataRender={props.dataContext}/>
    );
  };

  const renderMoveTo = (condition) => {
    return (
      <React.Fragment>
        {condition ? <div className="moveTo" style={moveTo}><h2>move to</h2></div> : ''}
      </React.Fragment>
    );
  };
  const renderContextMenu = () => {
    return (
      <React.Fragment>
        <div className="contextMenu"  >
          <div className="content-top">
            <div className="itemContext" onClick={() => moveToClick(moveToValue)}>Di Chuyển tới</div>
            <div className="itemContext">Đổi tên</div>
            <div className="itemContext">Sao chép</div>
            <div className="itemContext" onClick={() => detailClicked()}>Chi tiết</div>
            <div className="itemContext">Tải xuống</div>
            <div className="itemContext">Xóa</div>
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
      {renderMoveTo(moveToValue)}
      {renderDetailModal()}
    </React.Fragment>
  );
}

