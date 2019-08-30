import React, {useState} from 'react';
import { Row, Dropdown } from 'antd';
import WHBoxDataImageElement from './WHBoxDataImageElement';
import PropTypes from 'prop-types';

export default function WHBoxDataImageList(props) {
  const listImage = props.dataFiles.filter((value)=> value.fileType === 'IMAGE');
  const [listimage, setListImage] = useState(listImage);
  console.log('count_img', listimage);
  // const menu = <ContextMenu data ={{name: 'quanbh'}} />;
  return (
    <div>
      <Row gutter={16}>
        {listImage.map((item, index) => {
          return (
            <WHBoxDataImageElement imageData = {item} key={index} index={index} />
          );
        })}
      </Row>
    </div>
  );
}

WHBoxDataImageList.propTypes = {
  dataFiles: PropTypes.array.isRequired,
};
