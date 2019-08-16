import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {ModalProvider} from 'react-modal-hook';
import './Warehouse.css';
import TopWarehouse from '../../components/WarehouseTop';
import Test from '../../components/WarehouseCreateFolder';
import WarehouseTopList from '../../components/WarehouseTopList';
import NoDocument from '../../components/WarehouseNoDocument';

function Warehouse() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="wrapperWarehouse">
        <TopWarehouse />
        <div className="listWarehouse">
          <WarehouseTopList />
          <NoDocument />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Warehouse
