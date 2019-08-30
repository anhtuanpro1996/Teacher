import React from 'react';
import {useState, useRef} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UploadingAction from '../actions/UploadingAction';
import * as URL from  '../constants/Url';
import {clickedBreadcumb} from '../actions/thunks/fetchChildFolders';

const inputFile = {
  width: '0.1px',
  height: '0.1px',
  opacity: '0',
  overflow: 'hidden',
  position: 'absolute',
  zIndex: '-1',
};
const txtUploadFile = {
  padding: '10px 55px 10px 16px',
  cursor: 'pointer',
};

function WareHouseUploadFile(props) {
  const current_point = props.currentFolder[props.currentFolder.length - 1];
  const inputEl = useRef(null);
  const { upload, actions, reload } = props;
  // console.log('actions', actions);
  const handleChange = () => {
    const files = inputEl.current.files;
    actions.getDataUpload(files);
    for (let i = 0; i < files.length; i++) {
      const form = new FormData();
      form.append('folderId', current_point.id);
      form.append('listFile', files[i]);
      actions.addFileUpload(files[i]);
      axios.post(URL.UPLOAD_FILE, form, {
        onUploadProgress: ProgressEvent => {
          const progress = ProgressEvent.loaded / ProgressEvent.total * 100;
          actions.updateProgress({indx: i, progress: progress});
        },
      }).then(function(response) {
        console.log('a', response);
        actions.uploadSucess({indx: i, upload: true});
        reload.clickedBreadcumb(props.currentFolder, current_point.id);
      })
        .catch(function(error) {
          actions.uploadSucess({indx: i, upload: false});
        });
    };
  };

  return (
    <React.Fragment>
      <input style={inputFile} type="file" ref={inputEl} name="file" id="file" className="inputfile" onChange={handleChange} multiple />
      <label style={txtUploadFile} htmlFor="file">Tải tệp tin</label>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  upload: state.getFileUploadReducer,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(UploadingAction, dispatch),
  reload: bindActionCreators({clickedBreadcumb: clickedBreadcumb}, dispatch),
});

export default  connect(mapStateToProps, mapDispatchToProps)(WareHouseUploadFile);
