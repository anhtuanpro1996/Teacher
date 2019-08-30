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

  const callback = () => {
    const listImage = props.listFile.filter((value)=> value.fileType === 'IMAGE');
    console.log('ze', listImage);
  };
  return (
    <div className="folder-data">
      <Tabs className="tab-data" defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tất cả" key="1">
          <WHBoxDataAll dataFiles = {props.listFile} />
        </TabPane>
        <TabPane tab="Video" key="2">
          <WHBoxDataVideoList dataFiles = {props.listFile} />
        </TabPane>
        <TabPane tab="Ảnh" key="3">
          <WHBoxDataImageList dataFiles = {props.listFile}/>
        </TabPane>
        <TabPane tab="Âm thanh" key="4">
          <WHBoxDataSoundList dataFiles = {props.listFile} />
        </TabPane>
        <TabPane tab="Tài liệu khác" key="5">
          <WHBoxDataOtherList dataFiles = {props.listFile} />
        </TabPane>
      </Tabs>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     activeFolder: state.folderActiveReducer,
//   };
// };


// WHFilterTab.propTypes = {
//   activeFolder: PropTypes.object.isRequired,
// };

// export default connect(mapStateToProps)(WHFilterTab);

export default WHFilterTab;
