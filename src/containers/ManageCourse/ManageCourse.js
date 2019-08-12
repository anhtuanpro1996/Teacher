import React  from 'react'
// import { useTranslation } from 'react-i18next';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import './manage_course.css';
import CourseElement from '../../components/CourseElement';

function ManageCourse() {

  // const { t } = useTranslation();
  const { SubMenu } = Menu;  
  return (
    <div className="manage-course">
      <Menu mode="inline">
        <SubMenu
          key="sub1"
          title={
            <span>
              <span>Khóa học đang tạo(2)</span>
            </span>
          }
        >
          <CourseElement/>
          <CourseElement/>
          <CourseElement/>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <span>Khóa học đang tạo(2)</span>
            </span>
          }
        >
          <CourseElement/>
          <CourseElement/>
          <CourseElement/>
        </SubMenu>
      </Menu>
    </div>
  )

}
// ManageCourse.propTypes = {
//   t: PropTypes.any.isRequired
// };
export default ManageCourse
