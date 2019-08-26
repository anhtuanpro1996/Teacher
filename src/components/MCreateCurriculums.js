import React, {useState, useReducer, useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import { bindActionCreators } from 'redux';
import { Row, Col, Select, Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as CourseActions from '../actions/CourseActions';

const { Option } = Select;

function MCreateCurriculums(props) {
  const {courseinfo, actions} = props;
  const setPage = (page) => {
    actions.SetActivePage({page: page});
  };
  return (
    <Row>
      <Col className="gutter-row button-div" span={24}>
        <Button className="btn-common cancel-btn" onClick={() => setPage(0)}>Quay lại</Button>
        {/* <Button className={'btn-common cancel-btn' + (curentpage === 1  ? '' : ' di-active')} onClick={()=>previousPage()} >Quay lại</Button> */}
        <Button className="btn-common next-btn" onClick={()=>setPage(2)} >Lưu và tiếp tục</Button>
      </Col>
    </Row>
  );
}
const mapStateToProps = (state) => ({
  courseinfo: state.courseReducer,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(CourseActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(MCreateCurriculums);
