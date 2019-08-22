import React from 'react';
import FilterTab from './WHFilterTab';
import WHListFolder from './WHListFolder';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRootFolderSuccess } from '../actions/RootFolderAction';
import WarehouseNoDocument from './WarehouseNoDocument';


const WHBoxData = (props) => {
  const dataRootFolder = props.dataRootFolder;
  return (
    <React.Fragment>
      {!dataRootFolder.pending ? renderRootFolder(dataRootFolder) : ''}
    </React.Fragment>
  );
};

const renderRootFolder = (dataRaw) => {
  const listFile = dataRaw.datas.files;
  const listFolder = dataRaw.datas.childFolders;

  if (listFile.length === 0 && listFolder.length > 0) {
    return (
      <WHListFolder listFolder = { listFolder } />
    );
  };

  if (listFile.length > 0 && listFolder.length === 0) {
    return (
      <FilterTab />
    );
  };
  if (listFolder.length > 0 && listFile.length > 0) {
    return (
      <React.Fragment>
        <WHListFolder listFolder = {listFolder}/>
        <FilterTab />
      </React.Fragment>
    );
  };

  return (
    <WarehouseNoDocument/>
  );
};

const mapStateToProps = (state) => {
  return {
    dataRootFolder: state.folderRootReducer,
  };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchRootFolderSuccess: fetchRootFolderSuccess}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WHBoxData);
