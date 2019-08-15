import React from 'react'
import { Tabs } from 'antd';
import WHBoxDataVideoList from './WHBoxDataVideoList';
import WHBoxDataImageList from './WHBoxDataImageList';
import WHBoxDataSoundList from './WHBoxDataSoundList';
import WHBoxDataOtherList from './WHBoxDataOtherList';
import WHBoxDataAll from './WHBoxDataAll';


const { TabPane } = Tabs;

export default function WHFilterTab(){
  return(
    <Tabs className="tab-data" defaultActiveKey="1">
      <TabPane tab="Tất cả" key="1">
        <WHBoxDataAll />
      </TabPane>
      <TabPane tab="Video" key="2">
        <WHBoxDataVideoList />
      </TabPane>
      <TabPane tab="Ảnh" key="3">
        <WHBoxDataImageList/>
      </TabPane>
      <TabPane tab="Âm thanh" key="4">
        <WHBoxDataSoundList />
      </TabPane>
      <TabPane tab="Tài liệu khác" key="5">
        <WHBoxDataOtherList />
      </TabPane>
    </Tabs>
  )
}
