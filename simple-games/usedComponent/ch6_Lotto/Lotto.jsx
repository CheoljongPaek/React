const React = require('react');
const { useState, useRef, useEffect, useMemo ,useCallback } = React;
const Ball = require('./Ball.jsx');

function getWinNumbers(maxNum) {
  console.log('getWinNumbers');
  const candidate = Array(maxNum).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  };
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.splice(0, 6).sort((p,c) => p-c);
  return [...winNumbers, bonusNumber];
};
const Lotto = () => {
  const [winBalls, setWinBalls] = useState([]);
  const lottoNumbers = useMemo(() => getWinNumbers(45), []);
  //useMemo: deps 안에 winballs 넣으면 매 실행마다 다시금 getWinNumbers()
  //호출한다. getWinNumbers()를 따로 호출하지 않으면 useMemo로 기억한
  //값이 저장된다.
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  const runTimeouts = () => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => {
          return [...prevWinBalls, winNumbers[i]];
        });
      }, (i+1)*1000);
    };
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
  };

  useEffect(() => {
    //useEffect useCallback useMemo의 내부에서는 useState 실행X
    console.log('1');
    console.log(winNumbers, '!!!');
    runTimeouts();
    return () => {
      console.log('2');
      timeouts.current.map((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]);

  const onClickRedo = useCallback((e) => {
    console.log(winNumbers);
    e.preventDefault();
    setWinNumbers(getWinNumbers(45));
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = []
  }, [winNumbers]);
  //useCallback: 함수 그 자체를 기억한다.
  //버튼클릭시 onClickRedo가 실행되는데, deps에 의해 함수 내부의 값이 변하지
  //않았으면 그 전 값 그대로 실행된다. setWinballs, setBonus, setRedo는
  //언제나 onClickRedo가 실행되면 [],null,false가 나오니 상관없지만
  //setWinNumbers의 값은 새로 실행되는 getWinNumbers에 맞춰 변화되어야하니
  //deps에는 변화하는 state 값인 winNumbers를 넣어야한다.
  //컴포넌트에 넣는 이벤트 함수들은 모두 useCallback사용.
  return (
      <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo ? <button onClick={onClickRedo}>한 번 더!</button> : <div></div>}
      </>
    ); 
}

module.exports = Lotto;