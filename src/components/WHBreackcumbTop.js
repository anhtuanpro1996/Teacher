import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const chevronRight = {
  width: '24px',
  height: '24px',
  backgroundImage: "url('/images/icon/folder.png')",
};
const WHBreackcumbTop = (props) => {
  const data = props.activeFolder.data;
  return (
    <React.Fragment>
      <div className="chevronRight" style={chevronRight}/>
      {(props.activeFolder.isClick) ? <p>{data.name}</p> : ''}
    </React.Fragment>
  );
};


const mapStateToProps = (state) => {
  return {
    activeFolder: state.folderActiveReducer,
  };
};


WHBreackcumbTop.propTypes = {
  activeFolder: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(WHBreackcumbTop);