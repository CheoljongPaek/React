import React, { useState, useCallback, useContext, memo } from 'react';
import { SET_TABLE, START_TIMER, STOP_TIMER, TableContext } from './MineSearch';

const Form = memo(() => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);
  const [stop, setStop] = useState('시작');
  const { dispatch, Stop } = useContext(TableContext);
  console.log('Form render');
  
  const onChangeRow = useCallback((e) => {
    console.log('rowchange');
    setRow(e.target.value);
  },[]);
  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  },[]);
  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  },[]);
  const onClickBtn = useCallback((e) => {
    e.preventDefault();
    if (Stop) { // 진행, 표시는 멈춤
      console.log('시작');
      dispatch({ type: START_TIMER });
      setStop('정지');
      //테이블 생성
      dispatch({ type: SET_TABLE, row, cell, mine });
    } else { // 멈춤, 표시는 진행
      console.log('정지');
      dispatch({ type: STOP_TIMER });
      setStop('시작');
      //action -> Change state -> Apply the state thru render in jsx -> 
      //Change ProviderProps value -> Apply the value to the child components.
      //-> rerender the child components.
    }
  },[Stop, row, cell, mine]);
  return (
    <div>
      <input type="number" placeholder="세로" value={row} onChange={onChangeRow}/>
      <input type="number" placeholder="가로" value={cell} onChange={onChangeCell}/>
      <input type="number" placeholder="지뢰" value={mine} onChange={onChangeMine}/>
      <button onClick={onClickBtn}>{stop}</button>
    </div>
  )
});

export default Form;