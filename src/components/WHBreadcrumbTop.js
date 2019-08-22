import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { getChildFolderData } from '../actions/thunks/fetchChildFolders';

const chevronRight = {
  width: '24px',
  height: '24px',
  backgroundImage: "url('/images/icon/chevron-right-24-px.png')",
};
const WHBreadcrumbTop = (props) => {
  const data = props.activeFolder.datas;
  return (
    <React.Fragment>
      {(props.activeFolder.pending) ? renderBreadcrumbItem(data,test) : ''}
    </React.Fragment>
  );
};

const test = () => {
  console.log('aaaa');
};

const renderBreadcrumbItem = (data,action) => {
  return (
    <React.Fragment>
      <p onClick={() => action()} style={{cursor:'pointer'}}>{data.name}</p>
      <div className="chevronRight" style={chevronRight}/>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    activeFolder: state.childFolderReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({folderClick: getChildFolderData}, dispatch);
};


WHBreadcrumbTop.propTypes = {
  activeFolder: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(WHBreadcrumbTop);
// export default WHBreadcrumbTop;
