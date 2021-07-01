const React = require('react');
const { PureComponent, Component, memo, useMemo } = React;
const Td = require('./Td');

const Tr = memo(({ rowIndex, rowData, dispatch }) => {
  console.log('Tr: rowIndex: ', rowIndex, 'rowData', rowData);
  return (
    <tr>
      {Array(rowData.length).fill().map((td, i) => (
        // useMemo(() => 
        <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData = {rowData[i]}>{''}</Td>
        //   ,[rowData[i]],
        // )
      ))}
    </tr>
  )
});

module.exports = Tr;