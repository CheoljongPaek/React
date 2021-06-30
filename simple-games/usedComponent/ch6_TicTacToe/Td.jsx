const React = require('react');
const { PureComponent, Component, memo, useCallback } = React;
const CLICK_CELL = require('./TicTacToe');
const CHANGE_TURN = require('./TicTacToe');

const Td = ({ rowIndex, cellIndex, cellData, dispatch }) => {
  console.log('Td: rowIndex: ', rowIndex, 'cellIndex: ', cellIndex);
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    dispatch({ type: CHANGE_TURN});
  }, []);
  return (
    <td onClick={onClickTd}>{cellData}</td>
  )
};
module.exports = Td;