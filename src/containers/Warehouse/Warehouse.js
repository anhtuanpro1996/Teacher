import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Warehouse.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UploadingAction from '../../actions/UploadingAction';
import TopWarehouse from '../../components/WarehouseTop';
import WarehouseTopList from '../../components/WarehouseTopList';
import NoDocument from '../../components/WarehouseNoDocument';

function Warehouse(props) {
  const { t } = useTranslation();
  let popupProgressUpload;

  if (props.upload.length > 1) {
    popupProgressUpload = (
      <div className="wrapperProgress">
        <div className="topProgress">
          <div className="txtProgress">Đã tải lên 1/4 tệp tin</div>
          <div className="icon"> </div>
        </div>
        <div className="progressFile">
          <div className="infoProgress">
            <div className="iconFileType"> </div>
            <div className="infoFile">
              <p className="nameFile">Bài 1.mp4</p>
              <div className="progress">
                <div className="progressActive"> </div>
              </div>
            </div>
            <div className="iconAction"> </div>
          </div>
          <div className="infoProgress">
            <div className="iconFileType"> </div>
            <div className="infoFile">
              <p className="nameFile">Bài 1.mp4</p>
              <div className="progress">
                <div className="progressActive"> </div>
              </div>
            </div>
            <div className="iconAction"> </div>
          </div>
          <div className="infoProgress">
            <div className="iconFileType"> </div>
            <div className="infoFile">
              <p className="nameFile">Bài 1.mp4</p>
              <div className="progress">
                <div className="progressActive"> </div>
              </div>
            </div>
            <div className="iconAction"> </div>
          </div>
          <div className="infoProgress">
            <div className="iconFileType"> </div>
            <div className="infoFile">
              <p className="nameFile">Bài 1.mp4</p>
              <div className="progress">
                <div className="progressActive"> </div>
              </div>
            </div>
            <div className="iconAction"> </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="wrapperWarehouse">
        <TopWarehouse />
        <div className="listWarehouse">
          <WarehouseTopList />
          <NoDocument />
        </div>
      </div>
      { popupProgressUpload }
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
