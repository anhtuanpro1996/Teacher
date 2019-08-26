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

  const handleChange = () => {
    const files = inputEl.current.files;
    // const infoFile = { 'listFile': files, 'folderId': 7 };
    // debugger;
    const form = new FormData();
    form.append('listFile', files);
    // for (let i = 0; i < files.length; i++) {
    // form.append('listFie', '/home/anhtuan96/Desktop/Bee.jpg');
    // };
    form.append('folderId', '7');
    // axios.post('http://171.16.0.31:8081/files', form, config: { headers: {'Content-Type': 'multipart/form-data' }})
    //   .then(response => {
    //     console.log('uploaddddd', response);
    //   })
    //   .catch(error => {
    //     console.log('falseUpload', error);
    //   });

    axios({
      method: 'post',
      url: 'http://171.16.0.31:8081/files',
      data: form,
      config: { headers: {'Content-Type': 'multipart/form-data' }},
    })
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(response) {
        // handle error
        console.log(response);
      });
    // actions.getDataUpload(files);

    // const headers = {
    //   'Content-Type': 'application/json',
    // };
    // const data = {'folder_id': 7, 'list_file_name': ['Menu_005.png']};
    // axios.post('http://171.16.0.31:8081/files/check-duplicate-filename', data, headers)
    //   .then(res => {
    //     console.log('aaaaaaaa', res.data);
    //     if (res.data.isExit === true) {
    //       // upload file trung
    //     } else {
    //       // upload file ko trung
    //       const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    //       const infoFile = { 'listFile': files, 'folderId': 7 };
    //       console.log('infoFile:', infoFile);
    //       axios.post('http://171.16.0.31:8081/files', infoFile, config)
    //         .then(response => {
    //           console.log('uploaddddd', response);
    //         })
    //         .catch(error => {
    //           console.log('falsUpload', error);
    //         });
    //     }
    //   })
    //   .catch(error => {
    //     console.log('bbbbbbbbbbb', error.response);
    //   });
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
