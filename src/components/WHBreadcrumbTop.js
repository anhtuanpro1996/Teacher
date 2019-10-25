import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { clickedBreadcumb } from '../actions/thunks/fetchChildFolders';

const chevronRight = {
  width: '24px',
  height: '24px',
  backgroundImage: "url('/images/icon/chevron-right-24-px.png')",
};
const listBC = {
  display: 'flex',
  cursor: 'pointer',
};
const WHBreadcrumbTop = (props) => {
  const data = props.activeFolder.breadcumb;
  return (
    <React.Fragment>
      {(props.activeFolder.pending) ? renderBreadcrumbItem(data, props.breadcumbClicked) : ''}
    </React.Fragment>
  );
};

const handleClickBreadcumb = (arr, index, action) => {
  const newArr = arr.filter((value, key) => {
    return key <= index;
  });
  const currentItem = newArr[newArr.length - 1];
  action(newArr, currentItem.id);
  // action(currentItem.id);
};

const renderBreadcrumbItem = (data, action) => {
  return (
    <React.Fragment>
      {data.map((value, key) => {
        return (
          <div key={key} className="listBC" style={listBC}>
            {(key === 0) ? '' : <div className="chevronRight" style={chevronRight}/>}
            <p onClick={() => handleClickBreadcumb(data, key, action)}>{value.title}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    activeFolder: state.childFolderReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({breadcumbClicked: clickedBreadcumb}, dispatch);
};


WHBreadcrumbTop.propTypes = {
  activeFolder: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(WHBreadcrumbTop);
// export default WHBreadcrumbTop;
