import React from 'react';
import { Upload, message } from 'antd';
import {useState, useRef} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UploadingAction from '../actions/UploadingAction';

const inputFile = {
  width: '0.1px',
  height: '0.1px',
  opacity: '0',
  overflow: 'hidden',
  position: 'absolute',
  zIndex: '-1',
};

function WareHouseUploadFile(props) {
  const inputEl = useRef(null);
  const { upload, actions } = props;
  console.log('actions', actions);
  const handleChange = () => {
    const files = inputEl.current.files;
    actions.getDataUpload(files);
    for (let i = 0; i < files.length; i++) {
      const form = new FormData();
      form.append('folderId', '7');
      form.append('listFile', files[i]);
      actions.addFileUpload(files[i]);
      axios.post('http://171.16.0.31:8081/files', form, {
        onUploadProgress: ProgressEvent => {
          const progress = ProgressEvent.loaded / ProgressEvent.total * 100;
          actions.updateProgress({indx: i, progress: progress});
        },
      });
    };
  };

  return (
    <React.Fragment>
      <input style={inputFile} type="file" ref={inputEl} name="file" id="file" className="inputfile" onChange={handleChange} multiple />
      <label htmlFor="file">Tải tệp tin</label>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  upload: state.getFileUploadReducer,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(UploadingAction, dispatch),
});

export default  connect(mapStateToProps, mapDispatchToProps)(WareHouseUploadFile);
