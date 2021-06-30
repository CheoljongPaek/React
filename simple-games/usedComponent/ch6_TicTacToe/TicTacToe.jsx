const React = require('react');
const { useState, useRef, useEffect, useMemo ,useCallback, useReducer } = React;
const Table = require('./Table');

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['','',''], 
    ['','',''], 
    ['','','']
  ],
}

//reducer 안에서 state를 어떻게 바꿀지 정해줌
const SET_WINNER = 'SET_WINNER';
exports.SET_WINNER = SET_WINNER;
const CLICK_CELL = 'CLICK_CELL';
exports.CLICK_CELL = CLICK_CELL;
const CHANGE_TURN = 'CHANGE_TURN';
exports.CHANGE_TURN = CHANGE_TURN; 

const reducer = (state, action) => {
  console.log('reducer');
  switch (action.type) {
    case SET_WINNER: {
      return {
        ...state,
        winner: action.winner,
      };
    }
    case CLICK_CELL: {
      const tableData = [...state.tableData]; // 바깥쪽 배열
      tableData[action.row] = [...tableData[action.row]]; //안쪽 배열 //immer라는 라이브러리로 가독성 해결
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
      };
    }
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      }
    }
    default:
      break;
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onClickTable = useCallback(() => {
    //dispatch 안에 객체는 action객체라고 부름. dispatch({...})는 '액션을 실행(디스패치)한다.'를 의미한다.
    //액션만 있다고해서 자동으로 state가 바뀌는건 아니고, reducer가 이 액션을 '해석'해서 직접 바꿔주는 역할을 한다.
    //액션을 디스패치할 때마다 reducer가 실행된다.
    dispatch({ type: SET_WINNER, winner: 'O' }); // reducer에서 action.type으로 액션 객체의 type을 호출한다. 객체안 나머지 프로퍼티도 마찬가지.
  }, []);

  return (
      <>
        <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch} />
        {state.winner && <div>{state.winner}님의 승리</div>}
      </>
    ); 
}

module.exports = TicTacToe;