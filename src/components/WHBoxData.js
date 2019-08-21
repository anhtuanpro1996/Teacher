import React from 'react';
import FilterTab from './WHFilterTab';
import WHListFolder from './WHListFolder';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { folderClicked } from '../actions/FolderActions';


const WHBoxData = (props) => {
  console.log('WHBoxData', props);
  return (
    <React.Fragment>
      <div className="folder-data">
        <FilterTab />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    listData: state.foldersReducer,
  };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({folderClicked: folderClicked}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WHBoxData);
