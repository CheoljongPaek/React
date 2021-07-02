const React = require('react');
const { useState, useRef, useEffect, useMemo ,useCallback, useReducer, memo } = React;
const Table = require('./Table');

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['','',''], 
    ['','',''], 
    ['','','']
  ],
  recentCell: [-1, -1],
}

//reducer 안에서 state를 어떻게 바꿀지 정해줌
const SET_WINNER = 'SET_WINNER';
exports.SET_WINNER = SET_WINNER;
const CLICK_CELL = 'CLICK_CELL';
exports.CLICK_CELL = CLICK_CELL;
const CHANGE_TURN = 'CHANGE_TURN';
exports.CHANGE_TURN = CHANGE_TURN; 
const RESET_GAME = 'RESET_GAME';
exports.RESET_GAME = RESET_GAME;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER: {
      console.log('reducer: SET_WINNER');
      return {
        ...state,
        winner: action.winner,
      };
    }
    case CLICK_CELL: {
      console.log('reducer: CLICK_CELL');
      const tableData = [...state.tableData]; // 바깥쪽 배열
      tableData[action.row] = [...tableData[action.row]]; //안쪽 배열 //immer라는 라이브러리로 가독성 해결
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case CHANGE_TURN: {
      console.log('reducer: CHANGE_TURN');
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      }
    }
    case RESET_GAME: {
      return {
        ...state,
        turn: 'O',
        tableData: [
          ['','',''], 
          ['','',''], 
          ['','','']
        ],
        recentCell: [-1, -1],
      };
    };
    default:
      console.log('reducer: default');
      break;
      // return state;
  }
};

const TicTacToe = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { turn, tableData, winner, recentCell } = state;

  const onClickTable = useCallback(() => {
    //dispatch 안에 객체는 action객체라고 부름. dispatch({...})는 '액션을 실행(디스패치)한다.'를 의미한다.
    //액션만 있다고해서 자동으로 state가 바뀌는건 아니고, reducer가 이 액션을 '해석'해서 직접 바꿔주는 역할을 한다.
    //액션을 디스패치할 때마다 reducer가 실행된다.
    dispatch({ type: SET_WINNER, winner: 'O' }); // reducer에서 action.type으로 액션 객체의 type을 호출한다. 객체안 나머지 프로퍼티도 마찬가지.
  }, []);

  console.log('TTT');

  useEffect(() => {
    // effect
    const [row, cell] = recentCell;
    if (row < 0) {
      return;
    }
    let win = false;
    if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
      win = true;
    }
    if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
      win = true;
    }
    if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
      win = true;
    }
    if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
      win = true;
    }
    if (win) {
      dispatch({ type: SET_WINNER, winner: turn });
      dispatch({ type: RESET_GAME });
    } else {
      let all = true;
      tableData.forEach((row) => {
        row.forEach((cell) => {
          if (!cell) {
            all = false;
          };
        });
      });
      if (all) { //무승부
        dispatch({ type: RESET_GAME });
      } else {
        dispatch({ type: CHANGE_TURN});
      }
    }
    //@turn 확인하기
    // return () => {
    //   // cleanup
    //   console.log('cleanup');
    // }
  }, [recentCell])
  //@deps state.tableData 로도 바꿔보기 

  return (
    <>
      <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch} />
      {winner && <div>{winner}님의 승리</div>}
    </>
  ); 
});

module.exports = TicTacToe;