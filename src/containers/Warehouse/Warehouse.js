import React from 'react';
import { useTranslation } from 'react-i18next';
import './Warehouse.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UploadingAction from '../../actions/UploadingAction';
import TopWarehouse from '../../components/WarehouseTop';
import WarehouseTopList from '../../components/WarehouseTopList';
import WHBoxData from '../../components/WHBoxData';
import {validateFileType} from '../../helpers/validateType';
import { useState } from 'react';
function Warehouse(props) {
  const { t } = useTranslation();
  const [showProgress, setShowProgress] = useState(true);
  const {upload, actions} = props;
  // eslint-disable-next-line react/prop-types

  const getPercentage = (percentage) =>{
    const percent = percentage + '%';
    return percent;
  };
  const listFileUpload = (data) =>{
    console.log('kokoko', data[0]);
    const arrClass = [];
    for (let i = 0; i < data.length; i++) {
      if ( data[i].progress === 100 && data[i].uploading === true ) {
        arrClass.push('uploadSuccess');
      } else if ( data[i].progress === 100 && data[i].uploading === false ) {
        arrClass.push('uploadFail');
      } else {
        arrClass.push('uploading');
      }
    };
    return (
      <React.Fragment>
        {data.map( (item, key) =>
          <div key={key} className="infoProgress">
            <div className="iconFileType" style={{WebkitMask: getImageType(item.file.type)}}> </div>
            <div className="infoFile">
              <p className={ 'nameFile ' + (item.progress === 100 && item.uploading === false ? 'changeName' : '') }>{item.file.name}</p>
              <p className={ 'noUpload ' + (item.progress === 100 && item.uploading === false ? 'showText' : 'hideText') }>Tải lên không thành công</p>
              <div className="progress">
                <div className={(item.progress === 100 && item.uploading === false ? 'progressFail' : 'progressActive') } style={{width: getPercentage(item.progress)}}> </div>
              </div>
            </div>
            <p>{item.uploading}</p>
            <div className={'iconAction ' + (arrClass[key]) }> </div>
          </div>
        )}
      </React.Fragment>
    );
  };
  const getImageType = (type)=> {
    const fileType = validateFileType(type);
    if (fileType === 'image') {
      return 'url(/images/icon/collections.png) no-repeat 50% 50%';
    }
    if (fileType === 'video') {
      return 'url(/images/icon/movie.png) no-repeat 50% 50%';
    }
    if (fileType === 'audio') {
      return 'url(/images/icon/library-music-24-px.png) no-repeat 50% 50%';
    }
    if (fileType === 'other') {
      return 'url(/images/icon/folder.png) no-repeat 50% 50%';
    }
  };
  // const getImageProgress = (item)=> {
  //   if (item.progress < 100 || item.uploading !== true) {
  //     return 'url(/images/icon/closeimg.png) no-repeat 50% 50%';
  //   };
  //   if (item.uploading === true) {
  //     return 'url(/images/icon/correct.png) no-repeat 50% 50%';
  //   };
  //   if (item.progress === 100 || item.uploading === false) {
  //     return 'url(/images/icon/refresh.png) no-repeat 50% 50%';
  //   };
  // };
  const handleShowHideProgress = () => {
    setShowProgress(!showProgress);
  };
  const popupProgressUpload = (upload) => {
    const uploaded = upload.filter(c => c.progress === 100 && c.uploading === true).length;
    if (upload.length > 0) {
      return (
        <div className="wrapperProgress">
          <div className="topProgress">
            <div className="txtProgress"> Đã tải lên {uploaded}/{upload.length} </div>
            <div className="icon" >
              <div className={ 'btnShowHideProgress ' + (showProgress === false ? 'arrow-up' : 'arrow-down') } onClick={ handleShowHideProgress } />
              <div className="btnCloseProgress" />
            </div>
          </div>
          <div className={ 'progressFile ' + (showProgress === false ? 'hideProgress' : 'showProgress') }>
            {listFileUpload(upload)}
          </div>
        </div>
      );
    }
  };


  return (
    <React.Fragment>
      <div className="wrapperWarehouse">
        <TopWarehouse />
        <div className="listWarehouse">
          <WarehouseTopList />
          {/* { (folders.loading) ? <WHListFolder folders= { folders } /> : 'Loading'} */}
          <WHBoxData />
        </div>
      </div>
      { popupProgressUpload(upload) }
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  upload: state.getFileUploadReducer,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(UploadingAction, dispatch),
});
export default  connect(mapStateToProps, mapDispatchToProps)(Warehouse);
