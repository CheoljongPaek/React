const React = require('react');
const { PureComponent, Component, memo } = React;
const Tr = require('./Tr');

const Table = memo(({ tableData, dispatch }) => {
  console.log('tableData: ', tableData);
  return (
    <table>
      {Array(tableData.length).fill().map((tr, i) => (
        <Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]}/>
      ))}
    </table>
  )
});

module.exports = Table;