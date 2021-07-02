const React = require('react');
const { useState, useRef, memo, useCallback } = React;

const NumberChoice = ({ dispatch }) => {
  const [number, setNumber] = useState(10);
  const inputRef = useRef(null);

  console.log('NumberChoice');

  const onSubmitForm = useCallback((e) => {
    console.log('submit form');
    e.preventDefault();
    if (number >=4 && number <= 12) {
      console.log('dispatch');
      dispatch({type: 'SET_NUMBER', tableSetNumber: number});
      
      const newRow = Array(number).fill();
      const newTable = [...newRow].map((v) => newRow);
      dispatch({type: 'SET_TABLE', tableData: newTable});
    }
  }, [number]);
  //effect
  const onChangeInput = useCallback((e) => {
    console.log(e.target.value);
    setNumber(parseInt(e.target.value));
    //입력은 될 수 밖에 없으니 onSubmit시 범위 내에 없으면 다시 입력하라는 창
  }, [number]);
  return (
    <>
      <form id="numberChoice" onSubmit={onSubmitForm}>
        <label htmlFor="numberInput">Set number 4~12</label>
        <input ref = {inputRef} id="numberInput" className="numberInput" type="number" value={number} min="4" max="12" onChange={onChangeInput} />
        <button id="enterBtn">Enter</button>
      </form>
    </>
  );
};
module.exports = NumberChoice;