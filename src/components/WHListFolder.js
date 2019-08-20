import React from 'react';
import { Row, Col  } from 'antd';
import FolderElement from './WHFolderElement';
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

const renderFolder = (folders, action) => {
  return (
    <Row gutter={16}>
      {folders.map((item, index) => {
        return (
          <Col onClick={() => action(item) } key={index} className="ant-col-8-cus" span={8}>
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

// function CourseElement(folder) {
//   return (
//     <Col className="ant-col-8-cus" span={8}>
//       <p>asdasdsad</p>
//       <div className="course-element">
//         <div className="folder-icon" style={iconFolder}/>
//         <p className="folder-name" style={folderName} title={folder.folder.name}>
//           {folder.folder.name}
//         </p>
//       </div>
//     </Col>
//   );
// }

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
};


export default connect(mapStateToProps, mapDispatchToProps)(WHListFolder);


