import React, { useState } from 'react';
import Filtro from '@/components/vitors/filtroVistors/filtro';
import { RenderComponents } from '../types/dashboardRender';
import style from './style/dashboard.module.css';

type FilterSearchProps = RenderComponents & {
  renderOptions: boolean;
};

export default function FilterSearch({ renderComponents, renderOptions }: FilterSearchProps) {
  const [disableInfo, setDisableInfo] = useState(true);

  const toggleDisableInfo = () => {
    setDisableInfo(!disableInfo);
  };

  const filterContainerStyles: React.CSSProperties = {
    width: disableInfo ? 'auto' : '120px',
    position: disableInfo ? 'static' : 'absolute',
    top: disableInfo ? 0 : 30,
    border: disableInfo? "" : 0,
  };

  return (
    <li
      onClick={() => {
        renderComponents();
        toggleDisableInfo();
      }}
      style={{ position: 'relative', border: filterContainerStyles.border }}
    >
      <div  style={filterContainerStyles}>
        <Filtro displayOptions={renderOptions} />
      </div>
      {disableInfo && <h3>filtro</h3>}
    </li>
  );
}
