const React = require('react');
const { useState, useRef, useEffect, useMemo ,useCallback } = React;
const Ball = require('./Ball.jsx');

someExpensiveComputation = (x) => {
  console.log('첫렌더링시에만 시행2');
  return x*2;
};

function Example() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(() => {
    console.log('첫렌더링시에만 시행1');
    const initialState = someExpensiveComputation(2);
    return initialState;
  });
  console.log('컴포넌트최상위1', count);
  
  useEffect(() => {
    console.log('useEffect1', count);
    document.title = `You clicked ${count} times!`;
    return () => {
      console.log('return', count);
    };
  }, [count]);
  console.log('컴포넌트최상위2', count);

  const [nothing, setNothing] = useState(null);

  useEffect(() => {
    console.log('useEffect2', count); // 바뀐 count 값
    return () => {
      console.log('return2', count); // 이전 count 값
    };
  }, [count]);

  const onClickBtn = useCallback(() => {
    console.log('click', count); // 1
    setCount((prevCount) => {
      console.log('prevCount: ',prevCount,'count: ', count); // 2
      return prevCount + 1  // 1,2,3 이후 마지막에 setCount의 state 갱신.
    });
    console.log('a');
    setState((prevState) => {
      console.log('prevState: ', prevState, 'state: ', state);
      return prevState*2
    });
    console.log('b');
  }, []);
  //useCallback(()=>{...}, []) empty deps일 때, 안에서 사용하는 state는 초기 값과 같게 가고, setState()를 통해 return한 값은 useCallback 함수 이후의 로직에 쓰인다.

  const onClickBtn2 = () => {
    setTimeout(() => {
      console.log('비동기 이후 setCount 이전');
      setCount((prevCount) => {
        console.log('비동기 이후 setCount 선언');
        return prevCount - 1
      });
      console.log('비동기 이후 setCount이후');
    }, 3000);
  };
  //함수 컴포넌트 안의 함수 onClickBtn2에서 시행이 지연되는 비동기 안에 setState가 있을 경우,
  //setCount를 둘러싸고 있는 있는 비동기가 완료 되었을때 setCount가 실행되고,
  //setCount가 실행되면 리렌더링이 일어나 count의 값 변경 -> jsx rerender -> 비동기 함수 안에 있고 setCount 함수 다음에 있는 로직들이 실행된다음 useEffects
  // -> useEffects 리턴(unSubscribe) -> useEffects 리턴을 제외한 나머지(Subscribe)

  //첫 렌더링시: 첫번째 렌더링에만 각각의 state변수들을 useState훅의 initialState인자값으로 초기값이 설정된다.
  //리렌더링시: setState는 비동기로 실행하기에, setCount(...)를 호출한 함수가 있으면 setState를 제외한 나머지 로직 실행 후 setCount 실행.
  //           바뀐 state변수 값으로 return 값인 jsx가 render 이후 useEffect실행. setState(...) -> component 로직(useEffect 등은 x) 실행 -> render -> useEffect
  //리액트는 useEffect 안의 함수인 effect가 수행되는 시점에 이미 DOM이 업데이트(렌더링 또는 리렌더링)이 업데이트되었음을 보장한다.
  //즉, render나 rerender 이후 useEffect가 실행된다. 또한 render 이후 다음 effect가 수행되기 전에 이전 effect는 정리된다.
  //useEffect 두번째 인자인 배열 안의 값이 변화하면 effect가 재실행되니, effect함수 안에서 참조되는 모든 값은 deps에 드러나야한다.
  //
  //리렌더링시, 여러개의 useEffect의 return 값들이 먼저 묶어서 실행되고(for unsubscribe) 이 후 return 위의 로직들이! 처음 useEffect hook부터 다음 useEffect hook까지 실행된다.
  //setState 안에 prevState를 가진 함수를 전달할 수 있는데 이 경우 prevCount를 가진 함수의 return 전에 내가 원하는 로직들을 사용할 수 있다는 장점이 있다.

  return (
    <div>
      <p>You clicked {count} times</p>
      {console.log('JSX 내부1')}
      <button onClick={onClickBtn}>
        UP me
      </button>
      <button onClick={onClickBtn2}>
        Down me
      </button>
    </div>
  );
}

module.exports = Example;