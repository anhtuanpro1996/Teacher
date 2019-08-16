import React from 'react';
import { Input } from 'antd';
import { withTranslation } from 'react-i18next';
import { Menu, Dropdown } from 'antd';
import {Link} from 'react-router-dom';
import WarehouseCreateFolder from './WarehouseCreateFolder';
import {ModalProvider} from 'react-modal-hook';

const { Search } = Input;

const infoMenu = {
  padding: '0'
}
const listMenu = {
  height: '40px',
  cusor: 'pointer',
  fonTFamily: 'Open Sans',
  fontSize: '14px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: '1.71',
  letterSpacing: 'normal',
  paddingLeft: '16px',
  color: '#4a4a4a',
  paddingTop: '8px'
}
const menu = (
  <Menu style={infoMenu}>
    <Menu.Item style={listMenu} className="listMenuItem" key="0">
      <ModalProvider>
        <WarehouseCreateFolder/>
      </ModalProvider>
    </Menu.Item>
    <Menu.Item style={listMenu} className="listMenuItem" key="1">
      <Link to="#"><span>Tải tệp tin</span></Link>
    </Menu.Item>
    <Menu.Item style={listMenu} className="listMenuItem" key="3">
      <Link to="#"><span>Tải thư mục</span></Link>
    </Menu.Item>
  </Menu>
);

const topWarehourse={
  height: '40px',
  marginBottom: '16px',
  paddingLeft: '8px',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
};
const titlePpage = {
  width: '493px',
  textAlign: 'left',
  paddingTop: '5px',
  float: 'left',
  fontSize: '24px',
  fontWeight: '600',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: '1.33',
  letterSpacing: 'normal',
  color: '#232731',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
};
const searchInput = {
  height: '100%',
  borderRadius: '6px',
  marginRight: '16px',
};
const btnAddNew = {
  display: 'flex',
  height: '40px',
  float: 'right',
  textAlign: 'center',
  backgroundColor: '#4a90e2',
  borderRadius: '6px',
  padding: '0 20px',
  alignItems: 'center'
}
const txtAddNew={
  width: '69px',
  fontFamily: 'Open Sans',
  fontSize: '14px',
  fontWeight: '600',
  fontStyle: 'normal',
  fontStretch: 'normal',
  letterSpacing: 'normal',
  color: '#fff'
}
const iconAddNew={
  width: '24px',
  height: '24px',
  backgroundColor: '#fff',
  WebkitMask: 'url(https://dvkhfbm6djrbs.cloudfront.net/5acc7360f161b700446f8349/5c4582f821889700acab81b3/add-circle-24-px.png) no-repeat 50% 50%',
  WebkitMaskSize: '100% !important',
  float: 'left',
  borderRadius: '50%',
  marginRight: '8px'
}
const TopWarehourse = ({t}) =>(
  <div style={topWarehourse}>
    <div style={titlePpage}>{t('Data Warehouse')}</div>
    <Search
      placeholder="Tìm kiếm..."
      onSearch={value => console.log(value)}
      style={searchInput}
    />
    <Dropdown overlay={menu} trigger={['click']}>
      <a style={btnAddNew} href="#">
        <div style={iconAddNew}></div>
        <span style={txtAddNew}>Thêm mới</span>
      </a>
    </Dropdown>
  </div>
);
export default withTranslation()(TopWarehourse);
