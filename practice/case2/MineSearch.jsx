import React, { useEffect, useReducer, createContext, useMemo } from 'react';
import Table from './Table';
import Form from './Form';
import Map from './Map';
import Timer from './Timer';
import { plantMine } from './functions';

export const TableContext = createContext({
  //default value
  tableData: [],
  dispatch: () => {},
  timer: 0,
  Stop: true,
});

const initialState = {
  tableData: [],
  timer: 0,
  Stop: true,
  data: {
    row: 0,
    cell: 0,
    mine: 0,
  }
}

export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const SET_TABLE = 'SET_TABLE';

const reducer = (state, action) => {
  console.log('pass reducer');
  switch (action.type) {

  case START_TIMER: {
    console.log('reducer action');
    return {
      ...state,
      timer: state.timer + 1,
      Stop: false,
    }
  };
  case STOP_TIMER: {
    return {
      ...state,
      Stop: true,
    }
  };
  case SET_TABLE: {
    console.log(action.row, action.cell, action.mine);
    return {
      ...state,
      data: {
        row: action.row,
        cell: action.cell,
        mine: action.mine,
      },
      tableData: plantMine(action.row, action.cell, action.mine),
    }
  };
  default:
    console.log('default');
    return state
  };
}


const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('render: ', state);
  const value = useMemo(
    () => ({
      tableData: state.tableData, 
      dispatch, 
      timer: state.timer,
      Stop: state.Stop,
    }), 
    [state.tableData, state.timer, state.Stop]
  );
  console.log('value: ', value);
  return (
    <TableContext.Provider value={value}>
      <Form />
      <Table />
      {/* <Timer /> */}
      {/* <Map /> */}
    </TableContext.Provider>
  );
};

export default MineSearch;