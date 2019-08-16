
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import NavLeft from './NavLeft';
import 'antd/dist/antd.css';
const { Header, Sider, Footer, Content } = Layout;


const divStyle = {
  background: '#f9fafc',
  padding: '32px 0px 0px',
  height: "100%"
};

const LayoutMain = ({ title, children }) => (
  <Row>
    <Col span={20} offset={2} style={divStyle}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <NavLeft />
      <Layout style={{ background: '#f9fafc' }}>
        {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
        <Content style={{ background: '#f9fafc' }}>
          {children}
        </Content>
      </Layout>
    </Col>
  </Row>
);

LayoutMain.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default LayoutMain;
