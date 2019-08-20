import React  from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Row, Col, Select, Input, Button } from 'antd';

const { Option } = Select;

const divcomon = () =>{
  return  (
    <Col className="gutter-row common-div" span={24}>
      <div className="common-div-txt">Lợi ích từ khóa học</div>
      <div className="common-div-detail">
        <Input className="common-div-detail-txt" placeholder="VD: Tự biết cách luyện phát âm tiếng Anh sao cho  hiệu quả" />
        <div className="common-div-close-btn">
          <div className="icon-close" style={{WebkitMask: 'url(/images/icon/closeimg.png) no-repeat 50% 50%'}}/>
        </div>
      </div>
      <div className="common-div-end">
        <div className="icon-home" style={{WebkitMask: 'url(/images/add-circle.png) no-repeat 50% 50%', background: '#5c9cfe'}}/>
        <div>Thêm</div>
      </div>
    </Col>
  );
};

function MCreateInfoCourse() {
  const { t } = useTranslation();
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
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
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
      {divcomon()}
      {divcomon()}
      {divcomon()}

      <Col className="gutter-row common-div div-description" span={24}>
        <div className="common-div-txt">Mô tả khóa học</div>
        <div className="common-div-detail">
          <Input className="common-div-description" placeholder="VD: Tự biết cách luyện phát âm tiếng Anh sao cho  hiệu quả" />
        </div>
      </Col>
      <Col className="gutter-row button-div" span={24}>
        <Button className="btn-common cancel-btn">Hủy bỏ</Button>
        <Button className="btn-common next-btn">Tiếp tục</Button>
      </Col>
    </Row>

  );
}
// MCreateInfoCourse.propTypes = {
//   t: PropTypes.any.isRequired,
// };
export default MCreateInfoCourse;
