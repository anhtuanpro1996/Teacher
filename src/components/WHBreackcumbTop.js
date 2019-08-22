import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const WHBreackcumbTop = (props) => {
  const data = props.activeFolder.data;
  return (
    <React.Fragment>
      <div className="chevronRight" style={chevronRight}/>
      {(props.activeFolder.isClick) ? <p> &gt; {data.name}</p> : ''}
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