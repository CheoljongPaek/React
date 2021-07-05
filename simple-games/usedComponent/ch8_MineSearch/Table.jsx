const React = require('react');
// const { TableContext } = require('./MineSearch');
const { useState, useContext, useRef, useEffect, useMemo ,useCallback, useReducer, memo } = React;
const Tr = require('./Tr');
import {TableContext} from './MineSearch';

const Table = () => {
  console.log(TableContext);
  const { tableData } = useContext(TableContext);
  console.log(tableData);
  return (
    <table>
      {Array(tableData.length).fill().map((tr, i) => <Tr />)}
    </table>
  )
}

module.exports = Table;