import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import MCreateInfoCourse from '../../../components/MCreateInfoCourse';
import MCreateCurriculums from '../../../components/MCreateCurriculums';
import './create_courses.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CourseActions from '../../../actions/CourseActions';
import { Button, Col, Row } from 'antd';

function CreateCourses(props) {
  const { t } = useTranslation();
  // const [curentpage, setCurrentPage] = useState(0);
  const [active, setActive] = useState({0: 'active', 1: '', 2: ''});
  const {courseinfo, actions} = props;
  const curentpage = courseinfo.filter(c => c.active === true)[0].page;

  console.log('p', courseinfo);
  const InfoTab = () => {
    console.log('d', courseinfo );
    if (curentpage === 0 ) {
      return <MCreateInfoCourse />;
    }
    if (curentpage === 1) {
      return <MCreateCurriculums />;
    }
    return <div />;
  };
  return (
    <Row>
      <div className="Top-Tabs">
        <div id="Top-Tabs-1" className={ curentpage === 0 ? 'active' : ''}>
          <div className="c_circle"> 1 </div>
          <div className="c_cicrle_parent"> 1 </div>
          <span>Tạo thông tin</span>
        </div>
        <div id="Top-Tabs-2" className={curentpage === 1 ? 'active' : ''}>
          <div className="c_circle"> 2 </div>
          <div className="c_cicrle_parent"> 2 </div>
          <span>Tạo đề cương</span>
        </div>
        <div id="Top-Tabs-3" className={curentpage === 2 ? 'active' : ''}>
          <div className="c_circle"> 3 </div>
          <div className="c_cicrle_parent"> 3 </div>
          <span>Gửi kiểm duyệt</span>
        </div>
      </div>
      <InfoTab />
      {/* <Col className="gutter-row button-div" span={24}>
        <Button className={'btn-common cancel-btn' + (curentpage === 0  ? '' : ' di-active')}>Hủy bỏ</Button>
        <Button className={'btn-common cancel-btn' + (curentpage === 1  ? '' : ' di-active')} onClick={()=>previousPage()} >Quay lại</Button>
        <Button className="btn-common next-btn" onClick={()=>nextPage()} >Tiếp tục</Button>
      </Col> */}
    </Row>

  );
}

const mapStateToProps = (state) => ({
  courseinfo: state.courseReducer,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(CourseActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateCourses);
