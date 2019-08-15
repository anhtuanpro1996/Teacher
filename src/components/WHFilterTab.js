import React from 'react'
import { Tabs } from 'antd';
import WHBoxDataVideoList from './WHBoxDataVideoList';
import WHBoxDataImageList from './WHBoxDataImageList';

const { TabPane } = Tabs;

export default function WHFilterTab(){
  let arr = [1,2,3,4,5,6];
  return(
    <Tabs className="tab-data" defaultActiveKey="1">
      <TabPane tab="Tất cả" key="1">
        Tất cả
      </TabPane>
      <TabPane tab="Video" key="2">
        <WHBoxDataVideoList />
      </TabPane>
      <TabPane tab="Ảnh" key="3">
        <WHBoxDataImageList/>
      </TabPane>
      <TabPane tab="Âm thanh" key="4">
        Âm thanh
      </TabPane>
      <TabPane tab="Tài liệu khác" key="5">
        Tài liệu khác
      </TabPane>
    </Tabs>
  )
}
