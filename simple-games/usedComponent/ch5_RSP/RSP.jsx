const React = require('react');
const { useState, useRef, useEffect } = React;
const Score = require('./Score.jsx');

//hooks는 라이프사이클 대신 useEffect를 사용.

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px'
}

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
}

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find((v)=> {
    if (v[1] === imgCoord) {
      return true;
    }
  })[0];
}

const RSP = () => {
  const [result, setResult] = useState('');
  const [imgCoordX, setImageCoordX] = useState('0');
  const [score, setScore] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const interval = useRef();

  useEffect(() => { // componentDidMount, componentDidUpdate 역할
    console.log('다시 실행');
    interval.current = setInterval(changeHand, 1000);
    console.log('deps가 빈 배열이면 useEffect함수는 이 라인까지 한 번만 실행됨');
    console.log('deps의 값으로 인해 useEffect 재실행시 return 실행 후 이 라인까지만 다시 실행');
    //deps에 값이 있으면 componentDidMount와 componentDidUpdate 둘 역할 모두 수행.
    //deps가 꼭 setstate일 필요는 없음. === 이런 비교도 가능.
    return () => { // componentWillUnmount 역할
      console.log('종료');
      clearInterval(interval.current);
    }
  }, [imgCoordX]); //imgCoordX가 계속 바뀌면 useEffect도 재실행

  const changeHand = () => {
    if (imgCoordX === rspCoords.바위) {
      setImageCoordX(rspCoords.가위);
    } else if (imgCoordX === rspCoords.가위) {
      setImageCoordX(rspCoords.보);
    } else if (imgCoordX === rspCoords.보) {
      setImageCoordX(rspCoords.바위);
    }
  }

  const onClickBtn = (choice) => () => {// 가위 바위 보 string
    if (isClicked === false) {
      clearInterval(interval.current);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoordX)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        setResult('비겼습니다.')
      } else if ([-1, 2].includes(diff)) {
        setResult('이겼습니다!');
        setScore((prevScore) => {
          return prevScore + 1;
        });
      } else {
        setResult('졌습니다!');
        setScore((prevScore) => {
          return prevScore -1;
        });
      }
      // 클릭시 setTimeout동안 클릭 비활성화
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
        interval.current = setInterval(changeHand, 300);
      }, 2000)
      // interval = setInterval(changeHand, 300) 
    }
  };

  return (
    <>
      <div id="computer" style={{backgroundPositionX: imgCoordX, backgroundPositionY: 0 }}></div>
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
        <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      </div>
      <div>
        <div>{result}</div>
        <div>현재 {score}점</div>
        {/* <Score score={score} /> */}
      </div>
    </>
  ); 
}

module.exports = RSP;