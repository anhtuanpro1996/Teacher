import React from 'react';
import {Modal, Button} from 'antd';
import {useState, useRef } from 'react';
import axios from 'axios';
import * as URL from  '../constants/Url';
import {clickedBreadcumb} from '../actions/thunks/fetchChildFolders';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const itemCreateFolder = {
  color: '#4a4a4a',
};
const titleModal = {
  fontFamily: 'Open Sans',
  fontSize: '16px',
  fontWeight: '600',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: '1.5',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#4a4a4a',
};
const nameFolder = {
  width: '100%',
  height: '40px',
  borderRadius: '4px',
  border: 'solid 1px #ecedf1',
  margin: '16px 0',
  paddingLeft: '11px',
  fontFamily: 'Open Sans',
  fontSize: '14px',
  lineHeight: '1.71',
  letterSpacing: 'normal',
  color: '#232731',
};
const footerModal = {
  width: '256px',
  margin: 'auto',
  height: '40px',
};
const btnCloseModal = {
  width: '120px',
  height: '40px',
  backgroundColor: '#ecedf1',
  fontSize: '14px',
  borderRadius: '8px',
  fontWeight: '500',
  lineHeight: '1.71',
  letterSpacing: '0.1px',
  textAlign: 'center',
  color: '#232731',
  float: 'left',
  border: 'none',
};
const btnCreateFolder = {
  width: '120px',
  height: '40px',
  float: 'right',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '1.71',
  letterSpacing: '0.1px',
  textAlign: 'center',
  backgroundColor: '#e62020',
  color: '#fff',
  border: 'none',
};

const txtCreate = {
  padding: '10px 36px 10px 16px',
};

function WareHouseCreateFolder(props) {
  const current_point = props.currentFolder[props.currentFolder.length - 1];
  const [modal, setModal] = useState(false);
  const [valNameFolder, setValNameFolder] = useState('');
  const inputNameFolder = useRef();
  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const creatFolder = () => {
    const nameFolder = inputNameFolder.current.value;
    const headers = {
      'Content-Type': 'application/json',
    };
    const data = {
      'parentFolder': {
        'id': current_point.id,
      },
      'name': nameFolder,
    };
    console.log('creatFolder', props.currentFolder);
    console.log('creatFolder', current_point.id);

    axios.post(URL.CREATE_FOLDER, data, headers)
      .then(response => {
        console.log('uploaddddd', response);
        props.clickedBreadcumb(props.currentFolder, current_point.id);
        closeModal();
      })
      .catch(error => {
        console.log('falsUpload', error);
      });
  };
  const inNameFolder = (e) => {
    const txtName = e.target.value;
    setValNameFolder(txtName);
    if (txtName.length > 300) {
      const only300c = txtName.substring(0, 300);
      setValNameFolder(only300c);
    }
  };
  return (
    <div>
      <a style={itemCreateFolder} onClick={showModal}><span style={txtCreate}>Tạo thư mục</span></a>
      <Modal className="wrapperModalCreateFolder"
        visible={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        <h3 style={titleModal}>Thư mục mới</h3>
        <input type="text" maxLength={300} placeholder="Tên thư mục" value = {valNameFolder} ref={inputNameFolder} name="nameFolder" style={nameFolder} onChange={(e)=>inNameFolder(e)} />
        <div style={footerModal}>
          <Button style={btnCloseModal} onClick={closeModal}>Hủy bỏ</Button>
          <Button style={btnCreateFolder} onClick={creatFolder}>Đồng ý</Button>
        </div>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({clickedBreadcumb: clickedBreadcumb}, dispatch);
};


export default connect(null, mapDispatchToProps)(WareHouseCreateFolder);
