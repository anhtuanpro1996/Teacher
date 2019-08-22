import React from 'react';
import { Tabs } from 'antd';
import WHBoxDataVideoList from './WHBoxDataVideoList';
import WHBoxDataImageList from './WHBoxDataImageList';
import WHBoxDataSoundList from './WHBoxDataSoundList';
import WHBoxDataOtherList from './WHBoxDataOtherList';
import WHBoxDataAll from './WHBoxDataAll';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const { TabPane } = Tabs;
const WHFilterTab = (props) => {
  return (
    <div className="folder-data">
      <Tabs className="tab-data" defaultActiveKey="1">
        <TabPane tab="Tất cả" key="1">
          <WHBoxDataAll dataFolder = {props.activeFolder.data} />
        </TabPane>
        <TabPane tab="Video" key="2">
          <WHBoxDataVideoList dataFolder = {props.activeFolder.data} />
        </TabPane>
        <TabPane tab="Ảnh" key="3">
          <WHBoxDataImageList dataFolder = {props.activeFolder.data}/>
        </TabPane>
        <TabPane tab="Âm thanh" key="4">
          <WHBoxDataSoundList dataFolder = {props.activeFolder.data} />
        </TabPane>
        <TabPane tab="Tài liệu khác" key="5">
          <WHBoxDataOtherList dataFolder = {props.activeFolder.data} />
        </TabPane>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeFolder: state.folderActiveReducer,
  };
};


WHFilterTab.propTypes = {
  activeFolder: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(WHFilterTab);
