import React, {useState, useReducer, useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import { bindActionCreators } from 'redux';
import { Row, Col, Select, OptGroup, Input, Button } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { Tooltip } from 'antd';
import * as URL from  '../constants/Url';
import * as CourseActions from '../actions/CourseActions';
import { withRouter } from 'react-router-dom';
import {checkEmptyString, checkArrEmptyString, checkNull} from '../helpers/helper';
import PropTypes from 'prop-types';

const { Option } = Select;

function MCreateInfoCourse(props) {
  const { t } = useTranslation();
  const {courseinfo, actions} = props;
  const initBenefit =  courseinfo[0].data.benefit.split(',');
  const initAudience =  courseinfo[0].data.target.split(',');
  const initRequirement =  courseinfo[0].data.requirement.split(',');
  const initShortDes = courseinfo[0].data.shortDes;
  const initCourseName = courseinfo[0].data.name;
  const initSubCategory = courseinfo[0].data.subCategory.id;
  const initCategoryId = courseinfo[0].data.subCategory.parentCategory.id;
  const [coursesName, setcoursesName] = useState(initCourseName);
  const [imgcourse, setImgcourse] = useState('/images/avatar.jpg');
  const [shortDes, setshortDes] = useState(initShortDes);
  const [category, setCategory] = useState([]);
  const [selectcategory, setSelectCategory] = useState(initCategoryId);
  const [subcategory, setSubcategory] = useState(initSubCategory);
  const [subcategoryarr, setSubcategoryArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clicktosave, setClickToSave] = useState(false);
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
  }, initBenefit);
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
  }, initAudience);
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
  }, initRequirement);
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
      dispatch({ type: 'editbenefit', value: e.target.value.substring(0, 300), stt: key});
    }
    if (type === 'audience') {
      dispatchAudience({ type: 'editAudience', value: e.target.value.substring(0, 300), stt: key});
    }
    if (type === 'requirements') {
      dispatchRequirements({ type: 'editRequirements', value: e.target.value.substring(0, 300), stt: key});
    }
  };
  const generateDiv = (type) => {
    if (type === 'benefit') {
      return (
        <React.Fragment>
          {benefit.map( (item, key) => < div key={key} className="common-div-detail">
            <Input onChange={(e)=> AddBenefit(e, type, key)} className={'common-div-detail-txt ' + ((checkEmptyString(item) && clicktosave ) ? 'warning-input' : '')} value={item === '' ? null : item} placeholder={t('CreateCoursesPage', {returnObjects: true}).benefitPlaceholder} />
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
            <Input onChange={(e)=> AddBenefit(e, type, key)} className={'common-div-detail-txt ' + ((checkEmptyString(item) && clicktosave) ? 'warning-input' : '')} value={item === '' ? null : item} placeholder={t('CreateCoursesPage', {returnObjects: true}).audiencePlaceholder} />
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
            <Input onChange={(e)=> AddBenefit(e, type, key)} className={'common-div-detail-txt ' + ((checkEmptyString(item) && clicktosave) ? 'warning-input' : '')} value={item === '' ? null : item} placeholder={t('CreateCoursesPage', {returnObjects: true}).RequirePlaceholder} />
            <div className="common-div-close-btn" onClick = {() => handleRemove(type, key)}>
              <div className="icon-close" style={{WebkitMask: 'url(/images/icon/closeimg.png) no-repeat 50% 50%'}}/>
            </div>
          </div>)}
        </React.Fragment>
      );
    }
    return <div/>;
  };
  const disalbeAddbuttion = (type) => {
    if (type === 'benefit') {
      if (benefit.length === 15) {
        return false;
      } else return true;
    }
    if (type === 'audience') {
      if (audience.length === 15) {
        return false;
      } else return true;
    }
    if (type === 'requirements') {
      if (requirements.length === 15) {
        return false;
      } else return true;
    }
    return true;
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
        <div className={'common-div-end ' + ( disalbeAddbuttion(type) ? '' : 'di-active')} onClick = {() => handleAdd(type)}>
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
  const inputshortDes = (e) =>{
    const txt = e.target.value;
    setshortDes(txt);
    if (txt.length >= 1000) {
      const only1000c = txt.substring(0, 1000);
      setshortDes(only1000c);
    }
  };
  const CreateCourse = () => {
    setClickToSave(true);
    const benefitStr = benefit.toString();
    const audienceStr = audience.toString();
    const requirementsStr = requirements.toString();
    const subcategoryId = subcategory;
    if ( !checkArrEmptyString(benefit) && !checkArrEmptyString(audience) && !checkArrEmptyString(requirements) && !checkNull(subcategory) && !checkEmptyString(imgcourse) && !checkEmptyString(shortDes) && !checkEmptyString(coursesName)) {
      const data  = {'name': coursesName, 'benefit': benefitStr, 'target': audienceStr, 'requirement': requirementsStr, 'shortDes': shortDes, 'subCategoryId': subcategoryId, 'userId': 1 };
      actions.createCourseInfo({data});
    } else {
      console.log('ERRROR');
    }
    // actions.SetActivePage({page: 1});
  };

  useEffect(() => {
    if (isLoading === false) {
      axios.get(URL.CATEGORY, { headers: { ContentType: 'application/json' } })
        .then(response => {
          setCategory(response.data);
          setIsLoading(true);
        })
        .catch(error => {
        });
    }
    if (selectcategory && category.length > 0) {
      category.map((cate) => cate.id === selectcategory ? setsubCatewhenchooseCate(cate.subCategories) : '' );
    };
  });

  const setsubCatewhenchooseCate = (subcatearr) => {
    setSubcategoryArr(subcatearr || []);
    if (subcatearr !== undefined && subcatearr.length > 0) {
      setSubcategory(subcatearr[0].id);
    };
  };
  const selectCategory = (id) =>{
    category.map((cate) => cate.id === id ? setsubCatewhenchooseCate(cate.subCategories) : '' );
    setSelectCategory(id);
  };
  const selectSubCategory = (id) =>{
    setSubcategory(id);
  };
  const GenCategoryDiv = () => {
    if (category.length > 0) {
      return (
        <Select className = { (clicktosave && !selectcategory) ? 'warning-input' : ''}  placeholder="Lựa chọn" value={selectcategory ? selectcategory : undefined} style={{ width: 120 }} onChange={(value) => selectCategory(value)}>
          {category.map( (item, key) => {return (<Option value={item.id} key={key} >{item.name}</Option>);} )}
        </Select>
      );
    } else {
      return ( <Select className = { (clicktosave && !selectcategory) ? 'warning-input' : ''} placeholder="Lựa chọn" value={selectcategory ? selectcategory : undefined} style={{ width: 120 }}/>);
    }
  };
  const GenChildCategory = () => {
    if (subcategoryarr.length > 0) {
      return (
        <Select className = { (clicktosave && !subcategory) ? 'warning-input' : ''} placeholder="Lựa chọn" value={subcategory ? subcategory : undefined} style={{ width: 120 }} onChange={(id) => selectSubCategory(id)} >
          {subcategoryarr.map( (item, key) => {return (<Option value={item.id} key={key} >{item.name}</Option>);} )}
        </Select>
      );
    } else {
      return ( <Select className = { (clicktosave && !subcategory) ? 'warning-input' : ''} placeholder="Lựa chọn" value={ undefined } style={{ width: 120 }}/>);
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
              <Input value={coursesName} maxLength={70} className={'M-info-detail-name-txt ' + ((clicktosave && !coursesName) ? 'warning-input' : '')}  placeholder={t('CreateCoursesPage', {returnObjects: true}).NameCouresPlaceholder} onChange={(e)=>inputNameCourses(e)}/>
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
                  {GenChildCategory()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div className={'gutter-box M-image ' + ((clicktosave && !imgcourse) ? 'warning-input' : '')}>
          <div className="avatar-courses" style={{backgroundImage: 'url(' + imgcourse + ')'}}>
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
          <Input.TextArea onChange={(e)=>inputshortDes(e)} value = {shortDes} className={'common-div-description ' + ((checkEmptyString(shortDes) && clicktosave) ? 'warning-input' : '')} placeholder={t('CreateCoursesPage', {returnObjects: true}).DescriptionPlaceholder} />
        </div>
      </Col>
      <Col className="gutter-row button-div" span={24}>
        <Button className="btn-common cancel-btn" onClick={() =>{props.history.goBack();}}>Hủy bỏ</Button>
        {/* <Button className={'btn-common cancel-btn' + (curentpage === 1  ? '' : ' di-active')} onClick={()=>previousPage()} >Quay lại</Button> */}
        <Button className="btn-common next-btn" onClick={()=>CreateCourse()} > Lưu và tiếp tục</Button>
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
MCreateInfoCourse.propTypes = {
  courseinfo: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MCreateInfoCourse));

