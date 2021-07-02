Day 1
- lecture\ch1: practice with plain js, not using jsx and webpack.
  : babel이 jsx의 문법(<.../>)을 createElement 으로 변경해줌.
- simple-games/usedClass/ch1/GuguDan
  : setState는 비동기적으로 업데이트하니 다음 상태를 계산할 때는
    해당 값에 의존해서는 안 된다. 그래서
  : prevState는 바로 이전 상태를 첫번째 인수로 지정해 놓은 것.
  : ref: 리액트에서 DOM에 이름을 다는 방법이다. input에 포커스, 스크롤 박스 조작 등 DOM을 반드시 직접 건드려야 할 때 사용하게 된다.
  : !!!클릭으로 숫자 조절하는 기능 추가, 더 수정할 것: 버튼을 꾹 누르면 계속 증가/ 터치 -> 
  https://stackoverflow.com/questions/50162522/cant-call-setstate-on-a-component-that-is-not-yet-mounted
  : HTML properties = class -> className , for -> htmlFor
Day 2
  - Day 1 프로젝트에 press and hold 기능 참고할 프로젝트 ch1-Fix 생성
  - simple-games/usedComponent/ch1/GuguDan
  : Hooks(... Functional Component)를 사용. GuguDan을 hooks로 변환.
  : Hooks는 DOM 접근 방식으로 useRef를 사용.
  : state가 바뀌면 Functional Component자체가 다시 실행
  : !!!component는 class의 prev~ 같은 인자의 사용이 불가능하나?
Day 3
  - lecture\ch2: webpack 설정: webpack-dev-server의 hot reloading을 위해 
    "@pmmmwh/react-refresh-webpack-plugin": "^0.4.3",
    "react-refresh": "^0.10.0",
    두 개를 설치.
  - simple-games/usedComponent/ch2/WordRelay
  : 클래스와 컴포넌트 각각 사용해서 WordRelay 완성.
Day 4
  - simple-games/usedClass/ch3/NumberBaseball
    : class에서 map과 props 사용
    : rendering이 빈번한 문제가 있음. 해결책으로 class에서는 shouldComponentUpdate + React.component, React.purecomponent.
      Hooks에서는 memo(memoization), 자식이 모두 purecomponent나 memo면 부모에도 적용할 수 있다.
    : class에서 기존 ref를 createRef로 대체.
    : Hooks에서는 DOM에 직접 접근할 때 useRef사용(1).
Day 5
  - simple-games/usedClass/ch4/ResponseCheck
    : react 조건문은 삼항연산자로 표현. jsx에서는 태그 없음을 null, undefined, false으로 뜻함. 
    : react 반복문은 map함수로 표현.
    : 자식에서 부모 컴포넌트로 값을 전달하여 state값 변경. 
      1: 부모가 컨트롤러로 setState를 담고있는 함수!를 자식에게 넘김(props를 통해서)
      2: 받은 함수를 자식은 특정 조건 하에 사용.
    : useRef는 mutable(값이 변경) 하지만 !화면에는 영향을 주지 않고 싶을 때! 사용(2).
Day 6
  - simple-games/usedClass/ch5/RSP
    : webpack에서 css와 이미지 파일 처리.
    : Class 라이프사이클 componentDidMount, componentDidUpdate, componentWillUnmount 학습.
    : 그림이 멈춰있을 때 버튼 클릭시 액션 없게 만들기 -> 완료
    : 컴포넌트 분리
    : 재시작시 마지막 사진하고는 다르게 사진 변경.
Day 6
- simple-games/usedClass/ch5/RSP
  : Higher order function
    함수 안에 파라미터를 넣어서 전달하려면 파라미터를 넣은 상태에서 한 번 실행되므로 함수로 한 번 더 감싼다. ' onClick={() => this.onClickBtn('바위')} '.
  : Hooks 라이프사이클용의 useEffect 학습.
Day 7
- simple-games/usedClass/ch6/Lotto
  :
- simple-games/usedComponent/ch6/Lotto
  : useMemo는 복잡한 함수 결과값을 기억할 때, useRef는 일반 값을 기억할 때 사용. 컴포넌트 특성상 리렌더링시 컴포넌트가 전부 다시 실행되기에 함수도 다시 실행. 이러한 중복 실행을 막기 위해 useMemo로 함수 값을 기억해서 사용한다.
  : useMemo는 함수의 결과 값, useCallback은 함수 자체를 기억한다. 복습필요.

  Day 8
- practice/case1
  :hooks 복습

  Day 9
- simple-games/usedComponent/ch7/TicTacToe
  : TicTaeToe > Table > Tr > Td 구조에서 클릭시 Td의 데이터가 변화해야한다. useReducer 학습.
  
  Day 10
- simple-games/usedComponent/ch7/TicTacToe
  : useReducer은 useState와 같이 비동기적으로 작동 -> render -> useEffect로 앞서 비동기적으로 처리된 값들을 이용해서 이어나감.
- 최적화
  : 최하위 자식들부터 memo 적용해보고 반복문이 있는 경우에는 특히 적용하는게 좋다.
  : memo가 도움이 안 될 때, useMemo를 적용하는 방법도 있다.
   **Tr.jsx 주석표시 해놓음. table에도 적용 가능.
   컴포넌트 자체를 기억하기 위해 useMemo를 사용한다.
  Day 11
- personal-project/games/track-it
  : context api를 배우기 전 개인 프로젝트.
  : 1. input에 입력한 수만큼의 표가 화면에 표시된다.
    1-1. 표를 테이블, 가로, 각각의 셀 이렇게 하위 3개의 컴포넌트 생성
  : 2. 클릭한 첫 셀의 색이 칠해지고, 다음 클릭한 셀을 잇는다.
    2-1. 잇는 순서는 세로, 가로 순서이다.
    2-2. 제자리 클릭도 가능하게 만든다.
  : dispatch가 연속해서 사용할 때 순서는, 각각의 dispatch가 return되어서 모든 state가 업데이트 되면, 렌더 후 이펙트.