import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const chevronRight = {
  width: '24px',
  height: '24px',
  backgroundImage: "url('/images/icon/chevron-right-24-px.png')",
};
const WHBreadcrumbTop = (props) => {
  const data = props.activeFolder.data;
  return (
    <React.Fragment>
      {(props.activeFolder.isClick) ? renderBreadcrumbItem(data.name) : ''}
    </React.Fragment>
  );
};

const renderBreadcrumbItem = (data) => {
  return (
    <React.Fragment>
      <div className="chevronRight" style={chevronRight}/>
      {/* <Link to="/"><p>{data}</p></Link> */}
      <p>{data}</p>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    activeFolder: state.folderActiveReducer,
  };
};


WHBreadcrumbTop.propTypes = {
  activeFolder: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(WHBreadcrumbTop);
