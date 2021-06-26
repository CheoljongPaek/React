const React = require('react');
const { useState, useRef, useEffect } = React;

//hooks는 라이프사이클 대신 useEffect를 사용.

const Test = () => {
  const [imgCoordX, setImageCoordX] = useState('0');
  const [timer, setTimer] = useState(600);
  const [timer2, setTimer2] = useState(0);
  const extraTime = useRef(100);
  const interval = useRef();

  useEffect(() => {
    Count();
    console.log('above return');
    return () => { //componentWillUnmount 역할
      setTimer2((prevTimer2) => {
        return prevTimer2 + 1;
      });//여기다 사용 가능유무 확인
      clearInterval(interval.current);
      console.log('1');
    }
  }, [timer]);

  const Count = () => {
    console.log('2');
    // clearInterval(interval.current);
    interval.current = setInterval(()=>{
      setTimer((prevTimer)=> {
        return prevTimer -= 1;
      });
    }, 1000);
  };

  const onClickBtn = (choice) => () => {
    console.log(choice);
    if (choice === '바위') {
      setImageCoordX('0px');
      Count();
    } else if (choice === '가위') {
      setImageCoordX('-142px');
      clearInterval(interval.current);
    } else {
      setImageCoordX('-284px');
      setTimer((prevTimer) => {
        return prevTimer + extraTime.current;
      });
    }
  }
  //화면 첫 렌더링 동시에 카운트다운 되면 / timer2는 1초씩 상승하게. 
  return (
    <>
      <div id="computer" style={{backgroundPositionX: imgCoordX, backgroundPositionY: 0 }}></div>
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위:start</button>
        <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위:stop</button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}>보:extraTime</button>
      </div>
      <div>
        {timer}초
      </div>
      <div>
        시간이 {timer2}초 흘렀습니다.
      </div>
    </>
  ); 
}

module.exports = Test;