const React = require('react');
const { TableContext } = require('./MineSearch');
const { useState, useContext, useRef, useEffect, useMemo ,useCallback, useReducer, memo } = React;
const Td = require('./Td');

const Tr = () => {
  const { tableData } = useContext(TableContext);

  return (
    <tr>
      {tableData[0] && Array(tableData[0].length).fill().map((td, i) => <Td />)}
    </tr>
  )
}

module.exports = Tr;