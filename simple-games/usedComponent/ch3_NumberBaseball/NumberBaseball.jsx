const React = require('react');
const { useState, useRef, memo } = React;
const Try = require('./Try.jsx');

function getNumbers() { //숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

const NumberBaseball = memo(() => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState([]);
  const [answer, setAnswer] = useState(getNumbers());
  const inputEl = useRef(null);
  
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join('')) { // 정답
      console.log(value);
      setResult('홈런!');
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: '홈런!' }]
      });
      alert('정답! 게임을 다시 시작합니다!');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
      inputEl.current.focus();
    } else { // 오답
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) { // 오답1 10번이상 틀렸을 때
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
        inputEl.current.focus();
      } else {// 오답2 틀릴때마다
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}]
        });
        setValue('');
        inputEl.current.focus();
      }
    }
  };
  const onChangeInput = (e) => {
    console.log(answer);
    setValue(e.target.value);
  };
  return (
    <>
      <div>{result}</div>
      <form onSubmit={onSubmitForm}>
        <input autoFocus ref={inputEl} maxLength={4} type="text" value={value} onChange={onChangeInput} />
        <button>입력!</button>
      </form> 
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return (
            <Try key={`${i+1}차 시도 :`} tryInfo={v} index={i} />
          );
        })}
      </ul>
    </>
  );  
});

module.exports = NumberBaseball;