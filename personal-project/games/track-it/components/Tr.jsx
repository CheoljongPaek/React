const React = require('react');
const { useState, useRef, memo } = React;
const Td = require('./Td');

const Tr = ({ rowIndex, rowData, dispatch, state }) => {

  return (
    <>
    <tr>
      {Array(rowData.length).fill().map((td, i) => (
        <Td key={i} dispatch={dispatch} state={state} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} />
      ))}
    </tr>
    </>
  );
};
module.exports = Tr;