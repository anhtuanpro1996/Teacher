
import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Button } from 'antd';
import { Avatar } from 'antd';
import { withTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
const { Sider} = Layout;
const { SubMenu } = Menu;
// css
const divStyle = {
  background: '#f9fafc',
  float: 'left',
  marginRight: '33px',
};
const CourseStyle = {
  background: '#f9fafc',
  padingLeft: '40px',
};

const menuStyle = {
  background: '#f9fafc',
  marginTop: '16px',
  borderTop: 'solid 1px #e9e9e9',
  borderRight: 'none',
  textAlign: 'left',
};

const textName = {
  width: '104px',
  height: '24px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '16px',
  size: '16px',
  fontWeight: '500',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.5,
  letterSpacing: '0.15px',
  color: '#232731',
};
const giangvien = {
  width: '72px',
  height: '24px',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '14px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.71,
  letterSpacing: '0.3px',
};
const divLogo = {
  padding: '0px 0px 32px 0px',
};
const textButon = {
  paddingRight: '20px',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 1.71,
  textAlign: 'center',
};
// =======css

const NavLeft = ({t}) => (
//  const { t, i18n } = useTranslation();
  < Sider style={divStyle}breakpoint="lg"collapsedWidth="0" >

    <div className="logo" style={divLogo} >
      <img alt="logo" size={64} src={'/images/logo_edumall.png'} />
    </div>
    <Avatar shape="circle" style={{width: '100px', height: '100px', marginBottom: '12px'}} src={'/images/avatar.jpg'} />
    <div>
      <span style={textName}> Carlos Wade </span>
    </div>
    <div style={{marginBottom: '16px'}}>
      <span style={giangvien}> {t('Teacher')} </span>
    </div>
    <Link to ="/manage/createcourses">
      <Button type="danger" style={{height: '40px', background: '#df322f'}}>
        <img  type="left" style={{filter: 'brightness(0) invert(1)', paddingRight: '27.5px'}} alt="add_circle" src={'/images/add-circle.png'} />
        <span style={textButon}>{t('Create Lecture')}</span>
      </Button>
    </Link>
    <Menu style={menuStyle} defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" style={{marginTop: '16px'}}>
        <div className="icon-home" style={{WebkitMask: 'url(/images/icon/acount.png) no-repeat 50% 50%'}}/>
        <span className="nav-text">{t('User Info')}</span>
      </Menu.Item>
      <Menu.Item key="2">
        <div className="icon-home" style={{WebkitMask: 'url(/images/icon/notification.png) no-repeat 50% 50%'}}/>
        <span className="nav-text">{t('Noti')}</span>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
            <div className="icon-home" style={{WebkitMask: 'url(/images/icon/play-icon.png) no-repeat 50% 50%'}}/>
            <span>{t('Course')}</span>
          </span>
        }
      >
        <Menu.Item key="3" style={CourseStyle}>
          <div className="icon-home" style={{WebkitMask: 'url(/images/icon/subscriptions.png) no-repeat 50% 50%'}}/>
          <span>{t('Manage Course')}</span>
        </Menu.Item>
        <Menu.Item key="4" style={CourseStyle}>
          <div className="icon-home" style={{WebkitMask: 'url(/images/icon/theaters.png) no-repeat 50% 50%'}} />
          <Link to="/warehouse"><span>{t('Data Warehouse')}</span></Link></Menu.Item>
      </SubMenu>
      <Menu.Item key="5">
        <div  className="icon-home" style={{WebkitMask: 'url(/images/icon/contact-perm.png) no-repeat 50% 50%'}}/>
        <span className="nav-text">{t('Manage Study')}</span>
      </Menu.Item>
      <Menu.Item key="6">
        <div className="icon-home" style={{WebkitMask: 'url(/images/icon/contact-support.png) no-repeat 50% 50%'}}/>
        <span className="nav-text">Teaching center</span>
      </Menu.Item>
      <Menu.Item key="7">
        <div className="icon-home" style={{WebkitMask: 'url(/images/icon/logout.png) no-repeat 50% 50%', background: '#e62020'}}/>
        <span className="nav-text">{t('Logout')}</span>
      </Menu.Item>
    </Menu>
  </Sider>
);
NavLeft.propTypes = {
  t: PropTypes.any.isRequired,
};

export default withTranslation()(NavLeft);
