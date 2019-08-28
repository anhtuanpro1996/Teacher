import React from 'react';
import './MoveToContext.css';

const MoveToContext = () => {
  return (
    <div className="move-to-block">
      <div className="header">
        <div className="header-title">
          <div className="arrow-left"/>
          <div className="title">Di chuyển tới</div>
        </div>
        <div className="close-modal"/>
      </div>
      <div className="body">
        {[1, 2, 3, 4, 5].map((value, index) => {
          return (
            <div key={index} className="folder-element">
              <div className="title-folder">
                <div className="icon"/>
                <div className="name">Thanhnv5.09912</div>
              </div>
              <div className="arrow-right"/>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div className="move-btn">
          <div className="title">Di chuyển đến đây</div>
        </div>
      </div>
    </div>
  );
};

export default MoveToContext;
