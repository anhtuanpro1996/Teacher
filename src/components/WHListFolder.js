import React from 'react';
import { Row, Col  } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { folderClicked } from '../actions/FolderActions';

const iconFolder = {
  width: '32px',
  height: '32px',
  backgroundColor: '#646d84',
  WebkitMask: "url('/images/icon/folder.png') no-repeat 50% 50%",
  WebkitMaskSize: '100%',
  marginRight: '8px',
};
const folderName = {
  display: 'block',
  width: '50%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  textAlign: 'left',
};

function WHListFolder(props) {
  const rawdata = props.listFolder;
  const childFolders = rawdata.folders.childFolders;
  const clickedFolder = props.folderClicked;
  return (
    <div className="list-folder">
      {(rawdata.loading) ? renderFolder(childFolders, clickedFolder) : loading()}
    </div>
  );
};

const markFolderAction = () => {
  console.log(this);
};
const renderFolder = (folders, action) => {
  const onClick = (data) => {
    action(data);
    markFolderAction();
  };
  return (
    <Row gutter={16}>
      {folders.map((item, index) => {
        return (
          <Col onClick={() => onClick(item)} key={index} className="ant-col-8-cus" span={8}>
            <div className="course-element">
              <div className="folder-icon" style={iconFolder}/>
              <p className="folder-name" style={folderName} title={item.name}>
                {item.name}
              </p>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};
const loading = () => {
  return (
    <div className="loader"/>
  );
};

const mapStateToProps = (state) => {
  return {
    listFolder: state.foldersReducer,
  };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({folderClicked: folderClicked}, dispatch);
};
WHListFolder.propTypes = {
  listFolder: PropTypes.object.isRequired,
  folderClicked: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(WHListFolder);


