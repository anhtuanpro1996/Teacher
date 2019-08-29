import React, {useState, useReducer, useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import { bindActionCreators } from 'redux';
import { Row, Col, Select, OptGroup, Input, Button } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { Tooltip } from 'antd';
import * as URL from  '../constants/Url';

import * as CourseActions from '../actions/CourseActions';

const { Option } = Select;

function MCreateInfoCourse(props) {
  console.log('hihi', props);
  const {courseinfo, actions} = props;
  const { t } = useTranslation();
  const [coursesName, setcoursesName] = useState('');
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [benefit, dispatch] = useReducer((myArray, { type, value, stt }) => {
    switch (type) {
    case 'addbenefit':
      return [...myArray, value];
    case 'removebenefit':
      return myArray.filter((_, index) => index !== stt);
    case 'editbenefit':
      return myArray.map((todo, index) => index === stt ? value : todo);
    default:
      return myArray;
    }
  }, ['']);
  const [audience, dispatchAudience] = useReducer((myArray, { type, value, stt }) => {
    switch (type) {
    case 'addAudience':
      return [...myArray, value];
    case 'removeAudience':
      return myArray.filter((_, index) => index !== stt);
    case 'editAudience':
      return myArray.map((todo, index) => index === stt ? value : todo );
    default:
      return myArray;
    }
  }, ['']);
  const [requirements, dispatchRequirements] = useReducer((myArray, { type, value, stt }) => {
    switch (type) {
    case 'addRequirements':
      return [...myArray, value];
    case 'removeRequirements':
      return myArray.filter((_, index) => index !== stt);
    case 'editRequirements':
      return myArray.map((todo, index) => index === stt ? value : todo);
    default:
      return myArray;
    }
  }, ['']);
  const handleAdd = (type) => {
    switch (type) {
    case 'benefit':
      if (benefit.length <= 14) {
        dispatch({ type: 'addbenefit', value: '', stt: null });
      }
      break;
    case 'audience':
      if (audience.length <= 14) {
        dispatchAudience({ type: 'addAudience', value: '', stt: null });
      }
      break;
    case 'requirements':
      if (requirements.length <= 14) {
        dispatchRequirements({ type: 'addRequirements', value: '', stt: null });
      }
      break;
    }
  };
  const handleRemove = (type, key) => {
    switch (type) {
    case 'benefit':
      if (benefit.length > 1) {
        dispatch({ type: 'removebenefit', value: null, stt: key });
      }
      break;
    case 'audience':
      if (audience.length > 1) {
        dispatchAudience({ type: 'removeAudience', value: null, stt: key });
      }
      break;
    case 'requirements':
      if (requirements.length > 1) {
        dispatchRequirements({ type: 'removeRequirements', value: null, stt: key });
      }
      break;
    }
  };
  const AddBenefit = (e, type, key)=>{
    if (type === 'benefit') {
      dispatch({ type: 'editbenefit', value: e.target.value, stt: key});
    }
    if (type === 'audience') {
      dispatchAudience({ type: 'editAudience', value: e.target.value, stt: key});
    }
    if (type === 'requirements') {
      dispatchRequirements({ type: 'editRequirements', value: e.target.value, stt: key});
    }
  };
  const generateDiv = (type) => {
    if (type === 'benefit') {
      return (
        <React.Fragment>
          {benefit.map( (item, key) => < div key={key} className="common-div-detail">
            <Input onChange={(e)=> AddBenefit(e, type, key)} className="common-div-detail-txt" value={item === '' ? null : item} placeholder={t('CreateCoursesPage', {returnObjects: true}).benefitPlaceholder} />
            <div className="common-div-close-btn" onClick = {() => handleRemove(type, key)}>
              <div className="icon-close" style={{WebkitMask: 'url(/images/icon/closeimg.png) no-repeat 50% 50%'}}/>
            </div>
          </div>)}
        </React.Fragment>
      );
    }
    if (type === 'audience') {
      return (
        <React.Fragment>
          {audience.map( (item, key) => < div key={key} className="common-div-detail">
            <Input onChange={(e)=> AddBenefit(e, type, key)} className="common-div-detail-txt" value={item === '' ? null : item} placeholder={t('CreateCoursesPage', {returnObjects: true}).audiencePlaceholder} />
            <div className="common-div-close-btn" onClick = {() => handleRemove(type, key)}>
              <div className="icon-close" style={{WebkitMask: 'url(/images/icon/closeimg.png) no-repeat 50% 50%'}}/>
            </div>
          </div>)}
        </React.Fragment>
      );
    }
    if (type === 'requirements') {
      return (
        <React.Fragment>
          {requirements.map( (item, key) => < div key={key} className="common-div-detail">
            <Input onChange={(e)=> AddBenefit(e, type, key)} className="common-div-detail-txt" value={item === '' ? null : item} placeholder={t('CreateCoursesPage', {returnObjects: true}).RequirePlaceholder} />
            <div className="common-div-close-btn" onClick = {() => handleRemove(type, key)}>
              <div className="icon-close" style={{WebkitMask: 'url(/images/icon/closeimg.png) no-repeat 50% 50%'}}/>
            </div>
          </div>)}
        </React.Fragment>
      );
    }
    return <div/>;
  };

  const generateTitle = (type) => {
    if (type === 'benefit') {
      return (t('CreateCoursesPage', {returnObjects: true}).benefitHover);
    } else if (type === 'audience') {
      return (t('CreateCoursesPage', {returnObjects: true}).audienceHover);
    } else if (type === 'requirements') {
      return (t('CreateCoursesPage', {returnObjects: true}).requireHover);
    } else if (type === 'description') {
      return (t('CreateCoursesPage', {returnObjects: true}).descriptionHover);
    }
  };
  const divcomon = (text, type) =>{
    return  (
      <Col className="gutter-row common-div" span={24}>
        <div className="common-div-txt">
          <span>{text}</span>
          <Tooltip placement="right" title={generateTitle(type)}>
            <div className="common-suggest"/>
          </Tooltip>
        </div>
        {generateDiv(type)}
        <div className="common-div-end" onClick = {() => handleAdd(type)}>
          <div className="icon-home" style={{WebkitMask: 'url(/images/add-circle.png) no-repeat 50% 50%', background: '#5c9cfe'}}/>
          <div className="txtAddIp">Thêm</div>
        </div>
      </Col>
    );
  };
  const inputNameCourses = (e)=>{
    const txt = e.target.value;
    setcoursesName(e.target.value);
    if (txt.length >= 70) {
      const only70c = txt.substring(0, 70);
      setcoursesName(only70c);
    }
  };
  const CancelPage = () =>{
    console.log('a');
  };
  const setPage = () => {
    console.log('actions', actions);
    actions.SetActivePage({page: 1});
  };

  useEffect(() => {
    if (isLoading === false) {
      console.log('vao day');
      axios.get(URL.CATEGORY, { headers: { ContentType: 'application/json' } })
        .then(response => {
          console.log('er', response.data);
          setCategory(response.data);
          setIsLoading(true);
        })
        .catch(error => {
          console.log('er', error.response);
        });
    }
  });

  const GenCategoryDiv = () => {
    if (category.length > 0) {
      return (
        <Select placeholder="Lựa chọn" style={{ width: 120 }}>
          {category.map( (item, key) => {return (<Option value={item.name} key={key} >{item.name}</Option>);} )}
        </Select>
      );
    } else {
      return ( <Select placeholder="Lựa chọn" style={{ width: 120 }}/>);
    }
  };
  return (
    <Row>
      <h1 className="title-create-course">Thông tin khóa học</h1>
      <Col className="gutter-row" span={20}>
        <div className="gutter-box">
          <div className="M-info-detail">
            <div className="M-info-detail-name">
              <div className="M-info-detail-name-cate">Tên khóa học</div>
              <Input value={coursesName} maxLength={70} className="M-info-detail-name-txt"  placeholder={t('CreateCoursesPage', {returnObjects: true}).NameCouresPlaceholder} onChange={(e)=>inputNameCourses(e)}/>
              <div className={'M-info-count' + (coursesName.length === 0 ? ' di-active' : '')}>{70 - coursesName.length}</div>
            </div>
            <div className="M-category">
              <div className="M-category-1">
                <div className="M-name-cate">
                  Danh mục
                </div>
                <div className="select-category">
                  {GenCategoryDiv()}
                </div>
              </div>
              <div className="M-category-2">
                <div className="M-name-cate">
                Danh mục con
                </div>
                <div className="select-category">
                  <Select placeholder="Lựa chọn" style={{ width: 120 }} >
                    <Option value="choose" disabled>Lựa chọn</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div className="gutter-box M-image">
          <div className="avatar-courses">
            <div className="burstmode"/>
            <div className="add-avatar">
              <div className="add-avatar-img"/>
              <span className="add-avatar-txt">Ảnh khóa học</span>
            </div>
          </div>
        </div>
      </Col>
      {divcomon('Lợi ích khóa học', 'benefit')}
      {divcomon('Phù hợp với', 'audience')}
      {divcomon('Yêu cầu khóa học', 'requirements')}
      <Col className="gutter-row common-div div-description" span={24}>
        <div className="common-div-txt">
          <span>Mô tả tổng quát</span>
          <Tooltip placement="right" title={generateTitle('description')}>
            <div className="common-suggest"/>
          </Tooltip>
        </div>
        <div className="common-div-detail">
          <Input.TextArea className="common-div-description" placeholder={t('CreateCoursesPage', {returnObjects: true}).DescriptionPlaceholder} />
        </div>
      </Col>
      <Col className="gutter-row button-div" span={24}>
        <Button className="btn-common cancel-btn" onClick={() => CancelPage()}>Hủy bỏ</Button>
        {/* <Button className={'btn-common cancel-btn' + (curentpage === 1  ? '' : ' di-active')} onClick={()=>previousPage()} >Quay lại</Button> */}
        <Button className="btn-common next-btn" onClick={()=>setPage()} > Lưu và tiếp tục</Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(MCreateInfoCourse);

