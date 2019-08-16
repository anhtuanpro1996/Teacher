import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Warehouse.css';
import TopWarehouse from '../../components/WarehouseTop';
import WarehouseTopList from '../../components/WarehouseTopList';
import NoDocument from '../../components/WarehouseNoDocument';
import WHBoxData from '../../components/WHBoxData';
import WHListFolder from '../../components/WHListFolder';

function Warehouse() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="wrapperWarehouse">
        <TopWarehouse />
        <div className="listWarehouse">
          <WarehouseTopList />
          {/* <NoDocument /> */}
          <WHListFolder />
          <WHBoxData />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Warehouse;
