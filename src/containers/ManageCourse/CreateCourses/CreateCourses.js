import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import MCreateInfoCourse from '../../../components/MCreateInfoCourse';
import './create_courses.css';
import { Tabs, Icon } from 'antd';

const { TabPane } = Tabs;

const InfoTab = (props) => {
  console.log("daa",props);
  const isActive = props.active;
  if (isActive[0] === 'active') {
    return <MCreateInfoCourse />;
  }
  return <div />;
};

function CreateCourses() {
  const { t } = useTranslation();
  const [active, setActive] = useState({0: 'active', 1: '', 2: ''});
  console.log('DCMN', active);
  const handleActive = (index)=>{
    for (const key in active) {
      if (index == key) {
        setActive(prevState =>({...prevState, [key]: 'active'}));
      } else {
        setActive(prevState =>({...prevState, [key]: ''}));
      }
    }
  };
  return (
    <div>
      <div className="Top-Tabs">
        <div id="Top-Tabs-1" className={active[0]} onClick={()=>handleActive(0)}>
          <div className="c_circle"> 1 </div>
          <span>Tạo thông tin</span>
        </div>
        <div id="Top-Tabs-2" className={active[1]} onClick={()=>handleActive(1)}> Tạo đề cương</div>
        <div id="Top-Tabs-3" className={active[2]} onClick={()=>handleActive(2)}> Gửi kiểm duyệt</div>
      </div>
      <InfoTab  active = {active}/>
      {/* <Tabs tabBarStyle={{color: 'red !important'}} size = "large" className="tab-data" defaultActiveKey="1">
        <TabPane  tab={
          <span  className="TabInfo">
            <div className="c_circle">1</div>
            Tạo thông tin
          </span>
        } key="1">
          <MCreateInfoCourse />
        </TabPane>
        <TabPane tab="Tab 2" disabled key="2">
          Tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Tab 3
        </TabPane>
      </Tabs> */}
    </div>

  );
}
// CreateCourses.propTypes = {
//   t: PropTypes.any.isRequired,
// };
export default CreateCourses;
