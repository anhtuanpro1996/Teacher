import React from 'react';
import { Row, Dropdown, Menu } from 'antd';
import WHBoxDataImageElement from './WHBoxDataImageElement';
import ContextMenu from '../containers/Context/ContextMenu';

const contextMenuStyle = {
  height: '242px',
  width: '150px',
  backgroundColor: 'white',
};
export default function WHBoxDataImageList() {
  const arr = [1, 2, 3, 4, 5];
  const menu = <ContextMenu />;
  return (
    <div>
      <Row gutter={16}>
        {arr.map((item, index) => {
          return (
            <Dropdown overlay={menu} trigger={['contextMenu']} key={index}>
              <div>
                <WHBoxDataImageElement />
              </div>
            </Dropdown>
          );
        })}
      </Row>
    </div>
  );
}
