import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import MCreateInfoCourse from '../../../components/MCreateInfoCourse';
import './create_courses.css';
import { Button, Col, Row } from 'antd';

function CreateCourses() {
  const { t } = useTranslation();
  const [curentpage, setCurrentPage] = useState(0);
  const [active, setActive] = useState({0: 'active', 1: '', 2: ''});

  const nextPage = ()=>{
    if (curentpage < 2) {
      setCurrentPage(prevPage => prevPage + 1);
      if (curentpage == 0) {
        handleActive(1);
      }
      if (curentpage == 1) {
        handleActive(2);
      }
    }
  };
  const previousPage = ()=>{
    if (curentpage >= 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
    if (curentpage == 1) {
      handleActive(0);
    }
    if (curentpage == 2) {
      handleActive(1);
    }
  };
  const handleActive = (index)=>{
    for (const key in active) {
      if (index == key) {
        setActive(prevState =>({...prevState, [key]: 'active'}));
      } else {
        setActive(prevState =>({...prevState, [key]: ''}));
      }
    }
  };
  const InfoTab = () => {
    if (curentpage === 0 ) {
      return <MCreateInfoCourse />;
    }
    return <div />;
  };
  return (
    <Row>
      <div className="Top-Tabs">
        <div id="Top-Tabs-1" className={active[0]}>
          <div className="c_circle"> 1 </div>
          <div className="c_cicrle_parent"> 1 </div>
          <span>Tạo thông tin</span>
        </div>
        <div id="Top-Tabs-2" className={active[1]}>
          <div className="c_circle"> 2 </div>
          <div className="c_cicrle_parent"> 2 </div>
          <span>Tạo đề cương</span>
        </div>
        <div id="Top-Tabs-3" className={active[2]}>
          <div className="c_circle"> 3 </div>
          <div className="c_cicrle_parent"> 3 </div>
          <span>Gửi kiểm duyệt</span>
        </div>
      </div>
      <InfoTab />
      <Col className="gutter-row button-div" span={24}>
        <Button className={'btn-common cancel-btn' + (curentpage == 0  ? '' : ' di-active')}>Hủy bỏ</Button>
        <Button className={'btn-common cancel-btn' + (curentpage == 1  ? '' : ' di-active')} onClick={()=>previousPage()} >Quay lại</Button>
        <Button className="btn-common next-btn" onClick={()=>nextPage()} >Tiếp tục</Button>
      </Col>
    </Row>

  );
}

export default CreateCourses;
