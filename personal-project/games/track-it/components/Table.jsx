const React = require('react');
const { useState, useRef, memo } = React;
const Tr = require('./Tr');

const Table = ({ dispatch, tableData }) => {
  console.log('tableData: ', tableData);
  return (
    <>
      <table>
        {Array(tableData.length).fill().map((tr, i) => (
          <Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />
        ))}
      </table>
    </>
  );
};
module.exports = Table;