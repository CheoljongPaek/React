const React = require('react');
const { useState, useRef, memo } = React;
const Tr = require('./Tr');

const Table = ({ dispatch, tableData, state, recentCells }) => {
  console.log('tableData: ', tableData);
  return (
    <>
      <table>
        {Array(tableData.length).fill().map((tr, i) => (
          <Tr key={i} dispatch={dispatch} state={state} rowIndex={i} rowData={tableData[i]} recentCells={recentCells} />
        ))}
      </table>
    </>
  );
};
module.exports = Table;