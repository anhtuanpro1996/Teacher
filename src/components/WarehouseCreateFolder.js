import React from 'react';
import {Modal, Button} from 'antd';
import {useState, useRef } from 'react';
import axios from 'axios';

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
  color: '#b0b5c1',
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
};

function WareHouseCreateFolder(props) {
  const current_point = props.currentFolder[props.currentFolder.length - 1];
  console.log('WareHouseCreateFolder', current_point);
  const [modal, setModal] = useState(false);
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
        'id': 2,
      },
      'name': nameFolder,
    };
    axios.post('http://157.230.255.33:8890/api/lms/folders', data, headers)
      .then(response => {
        console.log('uploaddddd', response);
        closeModal();
      })
      .catch(error => {
        console.log('falsUpload', error);
      });
  };
  return (
    <div>
      <a style={itemCreateFolder} onClick={showModal}><span>Tạo thư mục</span></a>
      <Modal className="wrapperModalCreateFolder"
        visible={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        <h3 style={titleModal}>Thư mục mới</h3>
        <input type="text" placeholder="Tên thư mục" ref={inputNameFolder} name="nameFolder" style={nameFolder} />
        <div style={footerModal}>
          <Button style={btnCloseModal} onClick={closeModal}>Hủy bỏ</Button>
          <Button style={btnCreateFolder} onClick={creatFolder}>Đồng ý</Button>
        </div>
      </Modal>
    </div>
  );
};
export default WareHouseCreateFolder;
