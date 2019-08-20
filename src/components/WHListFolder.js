import React from 'react';
import { Row } from 'antd';
import FolderElement from './WHFolderElement';

export default function WHListFolder(folders) {
  console.log('folders-aadsa', folders.folders.folders.childFolders);
  const listFolder = folders.folders.folders.childFolders;

  return (
    <div className="list-folder">
      <Row gutter={16}>
        {listFolder.map((item, index) => {
          return (
            <FolderElement key={index} index = {index} folder={item}/>
          );
        })}
      </Row>
    </div>
  );
}

