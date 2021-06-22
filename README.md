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
  -simple-games/usedComponent/ch1/WordRelay
  : 클래스와 컴포넌트 각각 사용해서 WordRelay 완성.
  