import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Warehouse.css';
import TopWarehouse from '../../components/WarehouseTop';
import WarehouseTopList from '../../components/WarehouseTopList';
import NoDocument from '../../components/WarehouseNoDocument';
import WHBoxData from '../../components/WHBoxData';
import WHListFolder from '../../components/WHListFolder';
import * as FolderActions from '../../actions/FolderActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function Warehouse() {
  const { t } = useTranslation();
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
    </React.Fragment>
  );
}


export default Warehouse;
