import React from 'react';
import { Tabs } from 'antd';
import WHBoxDataVideoList from './WHBoxDataVideoList';
import WHBoxDataImageList from './WHBoxDataImageList';
import WHBoxDataSoundList from './WHBoxDataSoundList';
import WHBoxDataOtherList from './WHBoxDataOtherList';
import WHBoxDataAll from './WHBoxDataAll';
import { connect } from 'react-redux';


const { TabPane } = Tabs;

const WHFilterTab = (props) => {
  return (
    <Tabs className="tab-data" defaultActiveKey="1">
      <TabPane tab="Tất cả" key="1">
        <WHBoxDataAll dataFolder = {props.activeFolder} />
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
  );
};

const mapStateToProps = (state) => {
  return {
    activeFolder: state.folderActiveReducer,
  };
};

export default connect(mapStateToProps)(WHFilterTab);
