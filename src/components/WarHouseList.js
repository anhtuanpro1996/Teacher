import React, {useState} from 'react';
import { Table } from 'antd';

const iconAddNew = {
  width: '24px',
  height: '24px',
  backgroundColor: '#646d84',
  WebkitMask: 'url(/images/icon/folder.png) no-repeat 50% 50%',
  WebkitMaskSize: '100% !important',
  float: 'left',
  borderRadius: '50%',
  marginRight: '6px',
};
const textStyle = {
  fontFamily: 'Open Sans sans-serif',
  fontSize: '14px',
  lineHeight: 1.71,
  color: '#4a4a4a',
};
function renderFolder(folder) {
  return  (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div style={iconAddNew} />
      <span style={textStyle}>{folder}</span>
    </div>
  );
}

const columns = [
  {
    displayName: 'Hello',
    title: 'Tên',
    dataIndex: 'name',
    render: (name)=>renderFolder(name),
  },
  {
    title: 'Định dạng',
    dataIndex: 'type',
  },
  {
    title: 'Dung lượng',
    dataIndex: 'size',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'date',
  },
];

const data = [];
for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    name: `Thanhnv5.012345678900000${i}`,
    type: '__',
    size: '1.26gb',
    date: '12/04/2019',
  });
}

function WarHouseList() {
  const [count, setCount] = useState(0);
  return (
    <Table  columns={columns} dataSource={data} />
  );
}

export default WarHouseList;
