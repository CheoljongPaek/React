const React = require('react');
const { useState, useRef, useEffect, useMemo ,useCallback, useReducer, memo } = React;
const Table = require('./Table');
const Form = require('./Form');

const initialState = {
  tableData: [],
  timer: 0,
  result: '',
};

const reducer = (state, action) => {
  switch (action.type) {

    default:
      console.log('reducer: default');
      return state;
  }
}

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
       <Form />
       <div>{state.timer}</div>
       <Table />
       <div>{state.result}</div>
    </>
  );
};

module.exports = MineSearch;