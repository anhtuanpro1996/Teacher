import React from 'react';
import './ContextMenu.css';
export default function ContextMenu(props) {
  console.log('ContextMenu',props);
  return (
    <div className="contextMenu" >
      <div className="content-top">
        <div className="itemContext">Di Chuyển tới</div>
        <div className="itemContext">Đổi tên</div>
        <div className="itemContext">Sao chép</div>
        <div className="itemContext">Chi tiết</div>
        <div className="itemContext">Tải xuống</div>
        <div className="itemContext">Xóa</div>
      </div>
    </div>
  );
}
