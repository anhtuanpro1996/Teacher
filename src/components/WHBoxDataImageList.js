import React from 'react';
import { Row, Dropdown } from 'antd';
import WHBoxDataImageElement from './WHBoxDataImageElement';
import ContextMenu from './Context/ContextMenu';
import PropTypes from 'prop-types';

export default function WHBoxDataImageList(props) {
  const listImage = props.dataFolder.files.filter((value)=>{
    return value.fileType === 'IMAGE';
  });
  const menu = <ContextMenu />;
  return (
    <div>
      <Row gutter={16}>
        {listImage.map((item, index) => {
          return (
            <Dropdown overlay={menu} trigger={['contextMenu']} key={index}>
              <div>
                <WHBoxDataImageElement imageData = {item} />
              </div>
            </Dropdown>
          );
        })}
      </Row>
    </div>
  );
}

WHBoxDataImageList.propTypes = {
  dataFolder: PropTypes.object.isRequired,
};
