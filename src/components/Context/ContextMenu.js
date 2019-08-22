import React from 'react';
import './ContextMenu.css';
export default function ContextMenu() {
  return (
    <div className="contextMenu" >
      <div className="top">
        <div className="itemContext">Di Chuyển tới</div>
        <div className="itemContext">Đổi tên</div>
        <div className="itemContext">Sao chép</div>
        <div className="itemContext">Chi tiết</div>
        <div className="itemContext">Tải xuống</div>
      </div>
      <div className="bottom>" />
    </div>
  );
}
