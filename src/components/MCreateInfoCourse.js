import React, {useReducer} from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Row, Col, Select, Input } from 'antd';

const { Option } = Select;

function MCreateInfoCourse() {
  const { t } = useTranslation();
  // const [benefit, setBenefit] = useState([]);
  const [benefit, dispatch] = useReducer((myArray, { type, value, stt }) => {
    switch (type) {
    case 'addbenefit':
      return [...myArray, value];
    case 'removebenefit':
      return myArray.filter((_, index) => index !== stt);
    case 'editbenefit':
      return myArray.map((todo, index) => index === stt ? todo = value : todo = todo);
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
      return myArray.map((todo, index) => index === stt ? todo = value : todo = todo);
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
      return myArray.map((todo, index) => index === stt ? todo = value : todo = todo);
    default:
      return myArray;
    }
  }, ['']);
  const handleAdd = (type) => {
    switch (type) {
    case 'benefit':
      dispatch({ type: 'addbenefit', value: '', stt: null });
      break;
    case 'audience':
      dispatchAudience({ type: 'addAudience', value: '', stt: null });
      break;
    case 'requirements':
      dispatchRequirements({ type: 'addRequirements', value: '', stt: null });
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
    if (type == 'benefit') {
      dispatch({ type: 'editbenefit', value: e.target.value, stt: key});
    }
    if (type == 'audience') {
      dispatchAudience({ type: 'editAudience', value: e.target.value, stt: key});
    }
    if (type == 'requirements') {
      dispatchRequirements({ type: 'editRequirements', value: e.target.value, stt: key});
    }
  };
  const generateDiv = (type) => {
    if (type == 'benefit') {
      return (
        <React.Fragment>
          {benefit.map( (item, key) => < div key={key} className="common-div-detail">
            <Input onChange={(e)=> AddBenefit(e, type, key)} className="common-div-detail-txt" value={item == '' ? null : item} placeholder="VD: Tự biết cách luyện phát âm tiếng Anh sao cho  hiệu quả" />
            <div className="common-div-close-btn" onClick = {() => handleRemove(type, key)}>
              <div className="icon-close" style={{WebkitMask: 'url(/images/icon/closeimg.png) no-repeat 50% 50%'}}/>
            </div>
          </div>)}
        </React.Fragment>
      );
    }
    if (type == 'audience') {
      return (
        <React.Fragment>
          {audience.map( (item, key) => < div key={key} className="common-div-detail">
            <Input onChange={(e)=> AddBenefit(e, type, key)} className="common-div-detail-txt" value={item == '' ? null : item} placeholder="VD: Tự biết cách luyện phát âm tiếng Anh sao cho  hiệu quả" />
            <div className="common-div-close-btn" onClick = {() => handleRemove(type, key)}>
              <div className="icon-close" style={{WebkitMask: 'url(/images/icon/closeimg.png) no-repeat 50% 50%'}}/>
            </div>
          </div>)}
        </React.Fragment>
      );
    }
    if (type == 'requirements') {
      return (
        <React.Fragment>
          {requirements.map( (item, key) => < div key={key} className="common-div-detail">
            <Input onChange={(e)=> AddBenefit(e, type, key)} className="common-div-detail-txt" value={item == '' ? null : item} placeholder="VD: Tự biết cách luyện phát âm tiếng Anh sao cho  hiệu quả" />
            <div className="common-div-close-btn" onClick = {() => handleRemove(type, key)}>
              <div className="icon-close" style={{WebkitMask: 'url(/images/icon/closeimg.png) no-repeat 50% 50%'}}/>
            </div>
          </div>)}
        </React.Fragment>
      );
    }
    return <div/>;
  };

  const divcomon = (text, type) =>{
    return  (
      <Col className="gutter-row common-div" span={24}>
        <div className="common-div-txt">{text}</div>
        {generateDiv(type)}
        <div className="common-div-end" onClick = {() => handleAdd(type)}>
          <div className="icon-home" style={{WebkitMask: 'url(/images/add-circle.png) no-repeat 50% 50%', background: '#5c9cfe'}}/>
          <div>Thêm</div>
        </div>
      </Col>
    );
  };
  return (
    <Row>
      <Col className="gutter-row" span={20}>
        <div className="gutter-box">
          <div className="M-info-detail">
            <div className="M-info-detail-name">
              <div className="M-info-detail-name-cate">Tên khóa học</div>
              <Input className="M-info-detail-name-txt" placeholder="VD: Thành thạo Tiếng Anh trong 30 ngày" />
            </div>
            <div className="M-category">
              <div className="M-category-1">
                <div className="M-name-cate">
                  Danh mục
                </div>
                <div className="select-category">
                  <Select placeholder="Lựa chọn" style={{ width: 120 }} >
                    <Option value="1">Jack</Option>
                    <Option value="2">Lucy</Option>
                    <Option value="3">yimingheihiuhhuihuhuihuihiuhhi</Option>
                    <Option value="4">Jack</Option>
                    <Option value="5">Lucy</Option>
                    <Option value="6">yiminghe</Option>
                    <Option value="7">Jack</Option>
                    <Option value="8">Lucy</Option>
                    <Option value="9">yiminghe</Option>
                    <Option value="10">Jack</Option>
                    <Option value="11">Lucy</Option>
                    <Option value="12">yiminghe</Option>
                  </Select>
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
          <img style={{width: '100%', height: '100%'}} src="/images/avatar.jpg" />
        </div>
      </Col>
      {divcomon('Lợi ích khóa học', 'benefit')}
      {divcomon('Phù hợp với', 'audience')}
      {divcomon('Yêu cầu khóa học', 'requirements')}
      <Col className="gutter-row common-div div-description" span={24}>
        <div className="common-div-txt">Mô tả khóa học</div>
        <div className="common-div-detail">
          <Input className="common-div-description" placeholder="VD: Tự biết cách luyện phát âm tiếng Anh sao cho  hiệu quả" />
        </div>
      </Col>
    </Row>

  );
}
// MCreateInfoCourse.propTypes = {
//   t: PropTypes.any.isRequired,
// };
export default MCreateInfoCourse;
