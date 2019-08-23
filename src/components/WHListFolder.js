import React from 'react';
import { Row, Col  } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChildFolderData } from '../actions/thunks/fetchChildFolders';

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
  // console.log('WHListFolder',props);
  return (
    <div className="list-folder">
      {/* {(rawdata.loading) ? renderFolder(childFolders, clickedFolder) : loading()} */}
      {renderFolder(props.listFolder, props.folderClicked)}
    </div>
  );
};
const renderFolder = (folders, action) => {
  return (
    <Row gutter={16}>
      {folders.map((item, index) => {
        return (
          <Col onClick={() => action(item.id)} key={index} className="ant-col-8-cus" span={8}>
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

const mapStateToProps = (state) => {
  return {
    listChildFolder: state.childFolderReducer,
  };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({folderClicked: getChildFolderData}, dispatch);
};
WHListFolder.propTypes = {
  listFolder: PropTypes.array.isRequired,
};

// export default WHListFolder;

export default connect(mapStateToProps, mapDispatchToProps)(WHListFolder);


