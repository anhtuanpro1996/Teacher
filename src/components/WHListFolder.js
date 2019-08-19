import React from 'react';
import { Row } from 'antd';
import FolderElement from './WHFolderElement';

export default function WHListFolder() {
  const arr = [1, 2, 3, 4];
  return (
    <div className="list-folder">
      <Row gutter={16}>
        {arr.map((item, index) => {
          return (
            <FolderElement key={index} index = {index}/>
          );
        })}
      </Row>
    </div>
  );
}

