import React from 'react';
import { Row } from 'antd';
import FolderElement from './WHFolderElement';

<<<<<<< HEAD
export default function WHListFolder(folders) {
  console.log('folders-aadsa', folders.folders.folders.childFolders);
  const listFolder = folders.folders.folders.childFolders;

  return (
    <div className="list-folder">
      <Row gutter={16}>
        {listFolder.map((item, index) => {
          return (
            <FolderElement key={index} index = {index} folder={item}/>
=======
export default function WHListFolder() {
  const arr = [1, 2, 3, 4];
  return (
    <div className="list-folder">
      <Row gutter={16}>
        {arr.map((item, index) => {
          return (
            <FolderElement key={index} index = {index}/>
>>>>>>> 76cd3341be23c857516d57882235994aeb752690
          );
        })}
      </Row>
    </div>
  );
}

