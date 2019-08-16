import React from 'react';
import { Input, Button } from 'antd';
import { withTranslation } from 'react-i18next';
const { Search } = Input;

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
  width: '141px',
  float: 'right',
  fontSize: '14px',
  fontWeight: '600',
  fontStyle: 'normal',
  fontStretch: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
};
const txtAddNew = {
  paddingTop: '2px',
};
const iconAddNew = {
  width: '24px',
  height: '24px',
  backgroundColor: '#fff',
  WebkitMask: 'url(https://dvkhfbm6djrbs.cloudfront.net/5acc7360f161b700446f8349/5c4582f821889700acab81b3/add-circle-24-px.png) no-repeat 50% 50%',
  WebkitMaskSize: '100% !important',
  float: 'left',
  borderRadius: '50%',
};
const TopWarehourse = ({t}) =>(
  <div style={topWarehourse}>
    <div style={titlePpage}>{t('Data Warehouse')}</div>
    <Search
      placeholder="Tìm kiếm..."
      onSearch={value => console.log(value)}
      style={searchInput}
    />
    <Button style={btnAddNew} stype="" type="primary">
      <div style={iconAddNew} />
      <span style={txtAddNew}>{t('Add')}</span>
    </Button>
  </div>
);
export default withTranslation()(TopWarehourse);
