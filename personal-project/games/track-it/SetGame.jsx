const React = require('react');
const { useState, useRef, useReducer, useEffect, useMemo ,useCallback } = React;
const NumberChoice = require('./components/NumberChoice');
const Table = require('./components/Table');
const Reset = require('./components/Reset');

const initialState = {
  tableData: [
    ['','',''], 
    ['','',''], 
    ['','','']
  ],
  tableSetNumber: -1,
  recentCell: [-1, -1],
  recentCells: [],
  turn: "odd",
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NUMBER': {
      return {
        ...state,
        tableSetNumber: action.tableSetNumber,
      }
    };
    case 'SET_TABLE': {
      return {
        ...state,
        tableData: action.tableData,
      }
    }
    case 'RESET': {
      return {
        ...state,
        tableSetNumber: -1,
        recentCell: [-1, -1],
      }
    }
    case 'CLICK_CELL': {
      console.log('CLICK_CELL: ', state);
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;

      // const recentCells = [...state.recentCells];
      // recentCells[recentCells.length-1] = state.recentCell
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
        turn: state.turn === 'odd' ? 'even' : 'odd',
      }
    }
    case 'SET_RECENTCELLS': {
      //'CLICK_CELL' 이후 state가 변경되었으니 recentcells에 recentcell 넣기
      const recentCells = [...state.recentCells];
      recentCells.push(state.recentCell);//useCallback deps에 더블클릭 불가하게 -> 제자리 클릭도 가능하게
      return {
        ...state,
        recentCells,
      }
    }
    default:
      console.log('reducer: default');
      break;
  }
}

const SetGame = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableSetNumber, recentCells } = state;
  useEffect(() => {
    // effect
    console.log('useEffect state: ', state);
    //여기부터!@!@@
    //state.recentCells.length가 짝수일때 두 셀 가로 세로 줄 모두 칠하게
    if (recentCells.length !== 0 && recentCells.length % 2 === 0) {
      console.log('k');
    }
    return () => {
      // cleanup
    };
  });
  return (
    <>
      <Reset dispatch = {dispatch} />
      <h1 id="main_title">Track-it</h1>
      <div className="start">
        {tableSetNumber === -1 
          ? <NumberChoice dispatch = {dispatch}  />
          : <div id="tableContainer">
              <Table dispatch = {dispatch} tableData={state.tableData} />
            </div>}
      </div>
    </>
  ); 
}

module.exports = SetGame;