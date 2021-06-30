const React = require('react');
const { PureComponent, Component, memo } = React;
const Td = require('./Td');

const Tr = ({ rowIndex, rowData, dispatch }) => {
  console.log('Tr: rowIndex: ', rowIndex, 'rowData', rowData);
  return (
    <tr>
      {Array(rowData.length).fill().map((td, i) => (<Td dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData = {rowData[i]}>{''}</Td>))}
    </tr>
  )
};

module.exports = Tr;