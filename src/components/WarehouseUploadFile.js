import React from 'react';
import { Upload, message } from 'antd';
import {useState} from 'react';

// const inputFile = {
//   display: 'none',
// };
// const uploadProgress = {
//   width: '500px',
//   height: '500px',
//   position: 'absolute',
//   backgroundColor: 'red',
// };

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


function WareHouseUploadFile() {
  return (
    <React.Fragment>
      <Upload {...props}>
        {/* <input style={inputFile} type="file" name="file" id="file" className="inputfile" /> */}
        <label htmlFor="file">Tải tệp tin</label>
      </Upload>
    </React.Fragment>
  );
}

export default WareHouseUploadFile;
