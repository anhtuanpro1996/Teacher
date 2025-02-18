import React from 'react';
import { withTranslation } from 'react-i18next';
import { Select } from 'antd';
import WHBreadcrumbTop from './WHBreadcrumbTop';

const { Option } = Select;
// style css
const topList = {
  height: '56px',
  borderBottom: 'solid 1px #e8e8e8',
};
const nameWareHourse = {
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '16px',
  fontWeight: '600',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: '1.5',
  letterSpacing: 'normal',
  color: '#4a4a4a',
  textAlign: 'left',
  width: 'calc(100% - 190px)',
  float: 'left',
  paddingTop: '16px',
  display: 'flex',
};

const selectDoc = {
  width: '190px',
  float: 'right',
  paddingTop: '16px',
  cursor: 'pointer',
  paddingLeft: '8px',
};

const selectVal = {
  position: 'relative',
  float: 'left',
  // paddingLeft: '24px',
  marginTop: '-2px',
  width: '100%',
  fontFamily: 'OpenSans',
  fontSize: '16px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: '1.5',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#4a4a4a',
};


function handleChange(value) {

}

const WarehouseTopList = ({t}) =>(
  <div style={topList}>
    <div style={nameWareHourse}>
      <WHBreadcrumbTop/>
    </div>
    <div className="selectDoc" style={selectDoc}>
      <Select className="selectVal" style={selectVal} defaultValue="time" onChange={handleChange}>
        <Option value="time">{t('Time')}</Option>
        <Option value="name">{t('Name')}</Option>
        <Option value="capacity">{t('Capacity')}</Option>
      </Select>
      <div className="icon-dropdown" />
      <div className="icon-menu" />
    </div>
  </div>
);

export default withTranslation()(WarehouseTopList);
