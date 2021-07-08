import React, { useContext, memo } from 'react';
import { TableContext } from './MineSearch';

const Td = () => {
  const { tableData } = useContext(TableContext);

  const onClickTd = (e) => {
    if (e.target.tagName == 'TD') {
      e.target.style.backgroundColor = '#123';
    };
  };

  const onRightClickTd = () => {

  };

  return (
    <>
      <td onClick = {onClickTd} onContextMenu={onRightClickTd}/>
    </>
  )
};

export default Td;