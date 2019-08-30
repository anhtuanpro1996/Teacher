import React from 'react';
import FilterTab from './WHFilterTab';
import WHListFolder from './WHListFolder';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRootFolderSuccess } from '../actions/RootFolderAction';
import WarehouseNoDocument from './WarehouseNoDocument';
import { getChildFolderData } from '../actions/thunks/fetchChildFolders';


const WHBoxData = (props) => {
  const dataRootFolder = props.dataRootFolder;
  return (
    <React.Fragment>
      {dataRootFolder.pending ? renderRootFolder(dataRootFolder) : ''}
    </React.Fragment>
  );
};

const renderRootFolder = (dataRaw) => {
  const listFile = dataRaw.datas.files;
  const listFolder = dataRaw.datas.childFolders;
  console.log('chil', listFile.length);
  console.log('chil2', listFolder);
  if (listFile.length === 0 && listFolder.length > 0) {
    return (
      <WHListFolder listFolder = { listFolder } />
    );
  };

  if (listFile.length > 0 && listFolder.length === 0) {
    return (
      <FilterTab listFile={listFile} />
    );
  };
  if (listFolder.length > 0 && listFile.length > 0) {
    return (
      <React.Fragment>
        <WHListFolder listFolder = {listFolder}/>
        <FilterTab listFile = {listFile} />
      </React.Fragment>
    );
  };

  return (
    <WarehouseNoDocument/>
  );
};

const mapStateToProps = (state) => {
  return {
    dataRootFolder: state.childFolderReducer,
  };
};


// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({fetchRootFolderSuccess: getChildFolderData}, dispatch);
// };

export default connect(mapStateToProps)(WHBoxData);
