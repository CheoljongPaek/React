const React = require('react');
const { PureComponent, Component, memo, useCallback } = React;
const TicTacToe = require('./TicTacToe');

const Td = memo(({ rowIndex, cellIndex, cellData, dispatch }) => {
  console.log('Td: rowIndex: ', rowIndex, 'cellIndex: ', cellIndex, 'cellData: ', cellData);
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      console.log('Clicked on marked point');
      return;
    }
    dispatch({ type: TicTacToe.CLICK_CELL, row: rowIndex, cell: cellIndex });
    // dispatch({ type: TicTacToe.CHANGE_TURN});
  },[cellData]);
  return (
    <td onClick={onClickTd}>{cellData}</td>
  )
});
module.exports = Td;