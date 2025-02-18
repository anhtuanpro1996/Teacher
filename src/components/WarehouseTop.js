import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { Menu, Dropdown } from 'antd';
import {Link} from 'react-router-dom';
import WarehouseCreateFolder from './WarehouseCreateFolder';
import WareHouseUploadFile from './WarehouseUploadFile';
import { bindActionCreators } from 'redux';
import { clickedBreadcumb } from '../actions/thunks/fetchChildFolders';
import { connect } from 'react-redux';

const { Search } = Input;

const infoMenu = {
  padding: '0',
};
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
  padding: '0',
  color: '#4a4a4a',
  paddingTop: '8px',
};


const topWarehourse = {
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
  alignItems: 'center',
};
const txtAddNew = {
  width: '69px',
  fontFamily: 'Open Sans',
  fontSize: '14px',
  fontWeight: '600',
  fontStyle: 'normal',
  fontStretch: 'normal',
  letterSpacing: 'normal',
  color: '#fff',
};
const iconAddNew = {
  width: '24px',
  height: '24px',
  backgroundColor: '#fff',
  WebkitMask: 'url(https://dvkhfbm6djrbs.cloudfront.net/5acc7360f161b700446f8349/5c4582f821889700acab81b3/add-circle-24-px.png) no-repeat 50% 50%',
  WebkitMaskSize: '100% !important',
  float: 'left',
  borderRadius: '50%',
  marginRight: '8px',
};
const txtUploadFolder = {
  padding: '10px 16px',
};
function TopWarehourse(props) {
  const currentFolder = (props.activeFolder.breadcumb.length > 0) ? props.activeFolder.breadcumb : 0;
  // console.log('TopWarehourse', currentFolder);
  const { t } = useTranslation();
  const menu = (
    <Menu style={infoMenu}>
      <Menu.Item style={listMenu} className="listMenuItem">
        <WarehouseCreateFolder currentFolder={currentFolder}/>
      </Menu.Item>
      <Menu.Item style={listMenu} className="listMenuItem">
        <WareHouseUploadFile currentFolder={currentFolder}/>
      </Menu.Item>
      <Menu.Item style={listMenu} className="listMenuItem">
        <Link to="#"><span style={txtUploadFolder}>Tải thư mục</span></Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div style={topWarehourse}>
      <div style={titlePpage}>{t('Data Warehouse')}</div>
      <Search
        placeholder="Tìm kiếm..."
        onSearch={value => console.log(value)}
        style={searchInput}
      />
      <Dropdown overlay={menu} trigger={['click']}>
        <a style={btnAddNew} href="#">
          <div style={iconAddNew} />
          <span style={txtAddNew}>Thêm mới</span>
        </a>
      </Dropdown>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    activeFolder: state.childFolderReducer,
  };
};


export default connect(mapStateToProps)(TopWarehourse);
