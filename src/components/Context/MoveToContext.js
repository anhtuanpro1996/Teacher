import React, { useState } from 'react';
import './MoveToContext.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getListFolderForContext, moveFileToFolder } from '../../actions/thunks/fileContextAction';

const MoveToContext = (props) => {
  const listFolder = props.folderData.listFolder.childFolders;
  const breadCumbs = props.folderData.breadCubms;
  const [folderID, setFolderID] = useState('');
  const [fileID, setFileID] = useState('');
  const [clickedFolderName, checkActiveBtn] = useState(false);
  const handleArrowRight = (folderData) => {
    const folderID1 = folderData.id;
    const folderName1 = folderData.name;
    const BreadCubms = [...breadCumbs, {id: folderID1, title: folderName1}];
    props.fetchListFolder(folderID1, BreadCubms);
    checkActiveBtn(true);
    setFileID(props.dataFile.id);
    setFolderID(folderID1);
  };
  const handleArrowLeft = () => {
    if (breadCumbs.length > 1) {
      const currentBC = breadCumbs[breadCumbs.length - 1];
      const prevBC = breadCumbs.filter((value) =>{
        return value.id !== currentBC.id;
      });
      const prevFolder = prevBC[prevBC.length - 1];
      const prevFolderID = prevFolder.id;
      props.fetchListFolder(prevFolderID, prevBC);
      checkActiveBtn(true);
      setFileID(props.dataFile.id);
      setFolderID(prevFolder.id);
    }
  };
  const handleClickTitle = (folderData) => {
    setFolderID(folderData.id);
    setFileID(props.dataFile.id);
    checkActiveBtn(true);
  };
  const handleClickSubmitBtn = () => {
    // console.log('handleClickSubmitBtn', folderID);
    const dataPost = {
      'fileId': fileID,
      'parentFolderId': folderID,
    };
    props.moveFileToFolder(dataPost);
  };
  const renderSubmitBtn = () => {
    const disableBtn = () => {
      return (
        <div className="move-btn-disable">
          <div className="title">Di chuyển đến đây</div>
        </div>
      );
    };
    const activeSubmitBtn = () => {
      return (
        <div className="move-btn-active" onClick={() => handleClickSubmitBtn()}>
          <div className="title">Di chuyển đến đây</div>
        </div>
      );
    };
    return (
      <React.Fragment>
        {(clickedFolderName) ? activeSubmitBtn() : disableBtn()}
      </React.Fragment>
    );
  };
  return (
    <div className="move-to-block">
      <div className="header">
        <div className="header-title">
          <div className="arrow-left" onClick={() => handleArrowLeft()}/>
          <div className="title">{breadCumbs[breadCumbs.length - 1].title}</div>
        </div>
        <div className="close-modal"/>
      </div>
      <div className="body">
        {listFolder.map((value, index) => {
          return (
            <div key={index} className="folder-element">
              <div className="title-folder" onClick={() => handleClickTitle(value)}>
                <div className="icon"/>
                <div className="name">{value.name}</div>
              </div>
              <div className="arrow-right" onClick={() => handleArrowRight(value)}/>
            </div>
          );
        })}
      </div>
      <div className="footer">
        {renderSubmitBtn()}
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    folderData: state.listFolderForContextReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchListFolder: getListFolderForContext, moveFileToFolder: moveFileToFolder}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveToContext);
