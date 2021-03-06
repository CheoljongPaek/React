# Day 1
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
# Day 2
  - Day 1 프로젝트에 press and hold 기능 참고할 프로젝트 ch1-Fix 생성
  - simple-games/usedComponent/ch1/GuguDan
  : Hooks(... Functional Component)를 사용. GuguDan을 hooks로 변환.
  : Hooks는 DOM 접근 방식으로 useRef를 사용.
  : state가 바뀌면 Functional Component자체가 다시 실행
  : !!!component는 class의 prev~ 같은 인자의 사용이 불가능하나?
# Day 3
  - lecture\ch2: webpack 설정: webpack-dev-server의 hot reloading을 위해 
    "@pmmmwh/react-refresh-webpack-plugin": "^0.4.3",
    "react-refresh": "^0.10.0",
    두 개를 설치.
  - simple-games/usedComponent/ch2/WordRelay
  : 클래스와 컴포넌트 각각 사용해서 WordRelay 완성.
# Day 4
  - simple-games/usedClass/ch3/NumberBaseball
    : class에서 map과 props 사용
    : rendering이 빈번한 문제가 있음. 해결책으로 class에서는 shouldComponentUpdate + React.component, React.purecomponent.
      Hooks에서는 memo(memoization), 자식이 모두 purecomponent나 memo면 부모에도 적용할 수 있다.
    : class에서 기존 ref를 createRef로 대체.
    : Hooks에서는 DOM에 직접 접근할 때 useRef사용(1).
# Day 5
  - simple-games/usedClass/ch4/ResponseCheck
    : react 조건문은 삼항연산자로 표현. jsx에서는 태그 없음을 null, undefined, false으로 뜻함. 
    : react 반복문은 map함수로 표현.
    : 자식에서 부모 컴포넌트로 값을 전달하여 state값 변경. 
      1: 부모가 컨트롤러로 setState를 담고있는 함수!를 자식에게 넘김(props를 통해서)
      2: 받은 함수를 자식은 특정 조건 하에 사용.
    : useRef는 mutable(값이 변경) 하지만 !화면에는 영향을 주지 않고 싶을 때! 사용(2).
# Day 6
  - simple-games/usedClass/ch5/RSP
    : webpack에서 css와 이미지 파일 처리.
    : Class 라이프사이클 componentDidMount, componentDidUpdate, componentWillUnmount 학습.
    : 그림이 멈춰있을 때 버튼 클릭시 액션 없게 만들기 -> 완료
    : 컴포넌트 분리
    : 재시작시 마지막 사진하고는 다르게 사진 변경.
# Day 6
- simple-games/usedClass/ch5/RSP
  : Higher order function
    함수 안에 파라미터를 넣어서 전달하려면 파라미터를 넣은 상태에서 한 번 실행되므로 함수로 한 번 더 감싼다. ' onClick={() => this.onClickBtn('바위')} '.
  : Hooks 라이프사이클용의 useEffect 학습.
# Day 7
- simple-games/usedClass/ch6/Lotto
  :
- simple-games/usedComponent/ch6/Lotto
  : useMemo는 복잡한 함수 결과값을 기억할 때, useRef는 일반 값을 기억할 때 사용. 컴포넌트 특성상 리렌더링시 컴포넌트가 전부 다시 실행되기에 함수도 다시 실행. 이러한 중복 실행을 막기 위해 useMemo로 함수 값을 기억해서 사용한다.
  : useMemo는 함수의 결과 값, useCallback은 함수 자체를 기억한다. 복습필요.

# Day 8
- practice/case1
  :hooks 복습

# Day 9
- simple-games/usedComponent/ch7/TicTacToe
  : TicTaeToe > Table > Tr > Td 구조에서 클릭시 Td의 데이터가 변화해야한다. useReducer 학습.
  
# Day 10
- simple-games/usedComponent/ch7/TicTacToe
  : useReducer은 useState와 같이 비동기적으로 작동 -> render -> useEffect로 앞서 비동기적으로 처리된 값들을 이용해서 이어나감.
- 최적화
  : 최하위 자식들부터 memo 적용해보고 반복문이 있는 경우에는 특히 적용하는게 좋다.
  : memo가 도움이 안 될 때, useMemo를 적용하는 방법도 있다.
   **Tr.jsx 주석표시 해놓음. table에도 적용 가능.
   컴포넌트 자체를 기억하기 위해 useMemo를 사용한다.
# Day 11
- personal-project/games/track-it
  : context api를 배우기 전 개인 프로젝트.
  : 1. input에 입력한 수만큼의 표가 화면에 표시된다.
    1-1. 표를 테이블, 가로, 각각의 셀 이렇게 하위 3개의 컴포넌트 생성
  : 2. 클릭한 첫 셀의 색이 칠해지고, 다음 클릭한 셀을 잇는다.
    2-1. 잇는 순서는 세로, 가로 순서이다.
    2-2. 제자리 클릭도 가능하게 만든다.
  : dispatch가 연속해서 사용할 때 순서는, 각각의 dispatch가 return되어서 모든 state가 업데이트 되면, 렌더 후 이펙트.
# Day 12
- personal-project/games/track-it
  : useEffect 실행은 child먼저, 그 다음 parent이다.
# Day 13
- personal-project/games/track-it
  : useEffect 안에서 useReducer의 dispatch를 하면 state 변경 후 리렌더링이 일어난다. 리렌더링을 최소화 시키기 위해 이 사용은 피하는중.
- simple-games/usedComponent/ch8/MineSearch
  : useReduce는 state가 비동기적, redux는 state가 동기적으로 바뀐다.
  : Context API: usereduce를 사용할때 dispatch를 하위 컴포넌트에 계속 보내는 문제 해결.
  : 천천히, 최적화 중간중간 진행하면서 이어나가자!
# Day 14
- simple-games/usedComponent/ch8/MineSearch
  : useContext가 initialize하는 방법과, reducer state 값을 받는 방식을 이해.
  : 특정 행동시 -> reducer action 또는 state 변화로 인한 -> rendering을 어떻게 다루는지 파악.
# Day 15
- simple-games/usedComponent/ch8/MineSearch
  : Td.jsx 파일에서 jsx를 리턴하는 부분에 값을 저장하는 useMemo를 사용함으로써 최적화.
  : memo는 다음 렌더링이 일어날 때 props의 변화가 없다면 그대로 재사용한다.
- personal-project/games/case2/... (mineSearch 복습)
  : state, useReducer, useContext 관계
  : 다른 컴포넌트에서 useContext로 가져온 데이터는 수정하지 않는다.
  : a컴포넌트에서 b컴포넌트를 수정하고 싶으면 useContext로 가져온 b컴포넌트의 벨류들을 참고해서(수정X) dispatch({...action})를 한 다음, b컴포넌트 내부에서 action을 처리하면서 벨류들을 수정한다.
  (1). dispatch가 일어났을때.
  ----------------------------------------------------------------
# Day 16
- sleact/mylecture
  : clone coding react typescript
  : webpack dev server와 react hooks를 이용한 개발.
  : 폴더 구조는 
    1. pages: 서비스 되는 페이지
    2. components: 짜잘한 레이아웃
    3. layouts: 공통 레이아웃
  : 코드 스플리팅을 통해서 필요한 페이지들만 불러온다. 처음에는 페이지 단위로 구분.
    @loadable/component
    @types/loadable__component -D
    로그인페이지에 있을때는 회원가입페이지를 불러올 필요가 없다.
  : css in js 방식으로 emotions를 사용한다.
    @emotion/react @emotion/styled @emotion/babel-plugin
  : 웹팩데브서버의 historyApiFallback을 통해 주소의 변경에 따른 다른 웹 변경들을
    적용한다.
# Day 16-17
- sleact/mylecture/hooks/useInput.ts
- sleact/mylecture/pages/SignUp/index.tsx
  : Custum hook
  : 프론트와 백엔드 주소가 다를 때, 원래 프론트가 백엔드에 요청을 보내지 못한다.
    (CORS 문제 발생)
    웹팩데브서버에서는 proxy 프로퍼티를 설정해서 changeOrigin을 할 수 있다.
    백엔드 측에서 cors 미들웨어를 통과할때 설정으로도 CORS 문제 해결이 가능하다.
      proxy: {
      '/api/': {
        target: 'http://localhost:3095',
        changeOrigin: true,
      },
    '프론트엔드에서 /api/로 보내는 요청은 주소를 3095로 바꿔서 보낸 걸로 취급.'
  : 비동기 요청에서 setState들은 비동기 요청 전에 초기화(로딩 단계).
  : 새로 고침 있는 링크 태그 a 대신 react-router-dom의 Link를 사용한다.
  - sleact/mylecture/pages/Login/index.tsx
  : 주로 get 요청에 대한 데이터를 swr이 저장을함.(reqct query 같은)
    login은 post요청인데 어떻게 해결? get 요청을 한 번 더 보내자!
    내가 로그인 했으니 내 로그인 정보를 서버에 요청
    const {} = useSWR('http://localhost:3095/api/users', fetcher);
    useSWR은 주소를 fetcher 함수에 넘겨주는 역할정도만 함.
    utils/ 폴더에 fetcher함수 직접 구현.
    fetcher함수는 주소를 매개변수로 사용.
    fetcher에서 리턴하는 값이 {} 안에 들어간다.
  : 백엔드 app.js에서 CORS문제는 해결했지만
    프론트와 백엔드 서버 주소가 다르면 cookie가 전달이 안 된다.
    쿠키 공유를 위해 axios config에 { withCredentials: true }를 전달. post는 세번째 get에서는 두번째.
  : 쿠키는 백엔드에서 생성한다. 생성된 쿠키를 브라우저(프론트엔드)에 기억하게한다.
  : 프론트엔드에서는 한번 기억한 쿠키를 매 요청마다 백엔드로 보내준다.
# Day 18
- sleact/mylecture/layouts/Workspace
- sleact/mylecture/pages/Channel
  : Channel의 jsx를 컴포넌트 Workspace로 둘러싸면 Workspace의 children props는
    그 jsx가 된다. 템플릿같은.
  : layouts/App.tsx 가 메인페이지이다.
  : useSWR의 revalidate는 서버에 요청을 보내서 데이터를 가져온다.
    mutate는 서버에 요청 보내는 것 없이 데이터를 수정한다.
    mutate 첫인자는 데이터, 두번째 인자는 shouldRevalidate<boolean>이고
    두번째 인자는 바뀐 데이터가 제대로 들어갔는지 확인하는 역할이다.
    다시말해, 서버요청 없이 데이터를 바꿨다가 나중에 서버한테 점검을 하는 역할.
  : useSWR은 비동기 요청이나 get요청에만 한정된 도구가 아니다.
    fetcher를 다양하게 만들어서 그때그때 서버에서 오는 데이터를 번형한 리턴값으로
    프론트에 저장하자.
  : gravatar로 이미지 무작위 생성. npm 사이트에서 TS붙어있으면 내장 타입스크립트,
    DT가 붙어있으면 @types 따로 다운받아야함. 없으면 직접 타입 지정.
  : 중첩라우터
    <Switch> <Route /> </Switch> 라우터 안에서 또 라우터가 있게 하는 방법을
    중첩라우터라 부른다. 이때 같은 계층적인 경로에 있어야한다.
    app.jsx에서 /workspace path를 갖고, component인 Workspace를 화면에 띄울때,
    그 컴포넌트 안에 있는 라우터가 다시 실행.
  - sleact\mylecture\components\Menu\index.tsx
  : props의 기본값 설정.
# Day 18
  - sleact/mylecture/layouts/Workspace
  - sleact\mylecture\components\Modal\index.tsx
  : 재사용성의 여부에 따라 컴포넌트화 시킨다.
    Modal 이나 Menu같이 재사용성이 높으면 컴포넌트로 만들어 layout에 조건에 따라 넣고 뺀다.
  : submit form 뒤에 인풋창들은 비워야한다.
  - npm i react-toastify
  : 성공이나 에러 등의 message를 사용자에게 몇 초간 보여주는 인터페이스.
  - sleact\mylecture\components\CreateChannelModal\index.tsx
  : children props로 안 받으면 VFC 타입, 받으면 FC 타입.
  : return이 hooks보다 무조건 아래 있어야한다. 관련 에러: Invalid hook call.
# Day 19
  - sleact/mylecture/layouts/Workspace
  - sleact\mylecture\components\Modal\index.tsx
  : 프론트에서는 라우터의 주소 설계가 중요하다.
    "/workspace/:workspace" 콜론 앞은 특수한 역할.(파라미터) 사용자가 자유롭게
    값을 바꿀 수 있다. /workspace/test 이것도 저 주소에 해당된다.
  : setStat의 매개변수는 flag: 로 타입한다.
    ex) interface Props {
          setShowCreateChannelModal: (flag: boolean) => void;
        }
  - sleact\mylecture\components\DMList\index.tsx
  : react-router-dom jsx 태그인 Link의 to 프로퍼티는 a href와 같은 역할.
    NavLink는 activeClass를 추가하여 둘 수 있다. 현재 주소와 NavLink to의
    주소가 같으면 activeClass(예제에서는 Name)이 적용된다. 
  : react-router의 { useParams }를 import해서 url의 params를 가져온다.
# Day 20
  - sleact\mylecture\components\ChatBox\index.tsx
  : dm & channel 메세지 보내기 둘 다에 적용될 component 만들기.
    둘 다에서 쓰이기 위해 props로 올려줌.
  : 채팅을 서버에 보내고 swr을 통해서 서버에 저장된 채팅을 다시 받음.
  : 에러 error 나면 deps에 잘 넣었는지 확인 무조건!
# Day 21
  - WebSocket 실시간으로 서버와 데이터를 주고 받을 때 사용.
  : 지금까지는 프론트에서 서버로 요청을 보내고 서버에서 프론트로 응답을 보내는 단방향 방식을 사용.
    프론트에서는 실시간으로 데이터를 받아 오기 위해 주기적으로 요청을 보냈어야 함.(폴링방식)
    WebSocket은 한 번만 프론트와 서버를 연결해놓으면 양방향으로 데이터를 주고받음이 가능하다.
    훅에다가 socket.io를 연결해보자!
  : socket io는 계층이 있다. 네임스페이스와 룸. 슬랙의 워크스페이스를 네임스페이스로, 채널을 룸으로. 
  : typescript에서 빈객체나 빈배열은 타이핑을 해야한다.
    -> const sockets: { [key: string]: SocketIOClient.Socket } = {};
  : http 선요청 없이 websocket만 사용하라고 요청.
    -> sockets[workspace] = io.connect(`${backUrl}/ws-${workspace}`, {
    transports: ['websocket']});
  - sleact\mylecture\layouts\Workspace\index.tsx
  : socket을 콘솔찍으면 나오는 receiveBuffer 와 sendBuffer.
    정상이면 둘 다 비어있다.
  : network 창의 websocket 메세지에서 주황색 화살표는 서버에서 클라이언트로,
    초록색은 클라이언트에서 서버로 전송되는 데이터이다.
    2,3,2,3, 나오는 숫자는 핑퐁이라고 해서 연결이 잘 유지되나 socket.io의
    확인 방식이다.
# Day 22
  - sleact\mylecture\components\ChatBox\styles.tsx
  : emotion 확장 방법.
    export const MentionsTextarea = styled(MentionsInput)`...`
  : 정규표현식에서 +는 하나 이상(최대한 찾기), +?는 하나 이상(최소한 찾기)이다. 
  : [].concat(...chatData).reverse() -> 빈 배열에 concat을 하면 새 배열을 만든다. 또는 스프레드 [...chatData]. 불변성을 위해
# Day 23
  : reverse infinite scrolling은 스크롤이 맨 위에 올라갔나 감지부터 해야한다.
  : import userSWR, { useSWRInfinite } from 'swr'; 은 index(여기서는 페이지수)를 갖고있는 함수이다.
  - sleact\mylecture\pages\DirectMessage\index.tsx
  : 메세지를 보내고 서버와 데이터를 주고 받아 딜레이가 생긴다. optimistic ui로 해결.
    optimistic ui는 서버쪽으로 갔다오지 않기 때문에 임의로 데이터를 미리 만들어내야한다.
# Day 24 <New Project>
  - nodebird
  : cra 첫 사용.
  1. npm: create-react-app [folder name] 이후 run eject로 숨겨진 설정파일이 든 config와 scripts 폴더를 생성. 이 때 package.json 파일의 모든 dependency와 babel, jest 설정 코드가 드러남.
  2. 1번 루트 삭제. eject은 나중에 써보자!
# Day 25
  - nodebird
  : cra typescript template으로 생성후 백엔드 express와 연동하기 위해 proxy 설정.
  : 개발의 편리함을 위해 craco로 절대 경로 설정.
  : fontawesome으로 필요한 그림 선택.
  : css in js로 emotion을 적용.
    글로벌하게 쓰일 팔레트 styles 파일에 만들고 tsconfig.json에 절대경로 설정.
# Day 26
  - nodebird
  : 주소 전환시 css 애니메이션을 보여주며 리액트의 장점을 활용할 수 있는 방법 강구.
  : css만 활용할시 텍스트를 화면 밖으로 숨기는 트릭을 써야함.
    필요한 데이터만 주소 바뀔시 불러오자.
    애니메이션은 주소 바뀐 후 새로 생성된 텍스트를 화면 밖에서 안으로 옮겨와도 된다?
# Day 27
  : react에서 애니메이션과 제스쳐를 쉽게 다루게 해주는
    framer-motion을 시도.
  : React Router로 렌더링하는 컴포넌트에 prop 전달을 하기 위해
    ```<Route path='/education'
        render={() => <Education education={data} />}/>```
    component prop 대신 render prop을 사용.
  : framer-motion과 react-progressive-image 천천히 살펴보기.
# Day 28
  : 스크롤 다운이 안 되는 이유 파악하기.
    -> global style의 html, body {width & height 100%} 삭제고려.
    motion value의 progress를 망가트리는 이유가 될 수 있음.
    진행하다 재확인. -> scrollYProgress 적용을 위해 삭제해야함.
  : 스크롤바 커스텀하기.
  : 컴포넌트화 + 각 컴포넌트 스타일링하기.
# Day 29
  : 기본: const MContainer = styled.main`...`
    framer-motion: const Info = styled(motion.div) `...`
  : 각 컴포넌트나 페이지마다 emotion 적용, body같은 배경은 emotion global로
    저장했지만 느린 로딩시 적용도 시간이 걸림. 기본 배경 설정으로 App.tsx에
    App.css을 임포트함.
  : Menu modal 만들기 + framer-motion 부품 만들기 진행.
  : 타입 FC와 VFC는 권장을 안 하니 타입스크립트 칫싯 읽으면서 도전하기.
# Day 30
  : react-custom-scrollbars의 props인 renderTrack... 으로
    스크롤시 버튼 svg 사라지게 만들기.
    또한, menu 밖으로 마우스가 나가면 menu 컴포넌트 해제.
  : menu items가 화면에 부딪히거나 밖으로 나가면 흐리게 설정.
# Day 31
  : MenuItem 컴포넌트는 부모 컴포넌트인 Navigation에서 map으로 생성되기에
    props값이 변경될 경우 리렌더링이 map 함수 반복만큼 발생.
    그래서 상태 관리를 부모 컴포넌트에서 실행.
    items 각각의 height를 배열이나 오브젝트에 넣기를 고려.
# Day 32
  : 화면 크기에서 벗어난 items들의 opacity를 낮췄지만, 그냥 
    items 컨테이너 최상하단을 blur처리 하는게 효율성이 높고 사용성도 좋아보임.
# Day 33
  : toggle을 상위컴포넌트인 menu에서 관리하게 하고 menu modal 자체를 부품으로써
    사용하게 만든다.
# Day 34
  : router를 먼저 구상해놓을걸... 다음 프로젝트부터는 구상부터 하자.
  : whoami라는 프로젝트로 라우터간 이동에 framer 사용.
  : css in js를 위해 emotion 사용.
  Base.tsx의 emotion화부터.
# Day 35
  : context api with typescript로 데이터를 상위 컴포넌트에서 관리.
    하지만 라우트로 url이 변경될 시 값 저장이 안 되는 건 마찬가지이다.
    useswr로 데이터 관리 시작.
# Day 36
  : App.tsx의 라우터의 구조 변경 필요. Switch를 Route로 감싸지 말지만
    또한 RouteComponentProps 사용도 고려해야한다.
    라우터가 다른 주소를 계속 통과하면서 path가 마지막 주소로 뜬 거 아닌지 확인필요.
    **
# Day 37
  : dimmer과 children사이에 stopPropagtion을 가진 태그를 배치.
  : 모달의 x토글버튼도 Navigation 컴포넌트에 포함되게 만들것.
  모달로 감싸니 framer motion 안 되는 이유 찾기.
# Day 38
  : tween(default), duration / spring, stiffness
# Day 39
  : component unmout시 AnimatePresence까지 포함되어 사라지면 안 된다.
    ```
    <AnimatePresence exitBeforeEnter>
      {show && (...component)          
    )}
    ```
  exit할 때 effect 왜 안 나오지...toggle 문제부터 확인
  바로 꺼질 때 문제는 unmount가 안 되어서 그런건가?
  크롬 Components의 경고와 에러 활용.

  propagation...
  다음은 하얀원: 왜 2200 백그라운드 유지?
  circleeffect를 backdrop와 비교해 위치지정.
# Day 40
  : rerendering 문제 해결중. => 해결
  : static 파일은 서버랑 연결해서 적용해보자. -> 해결
# Day 41
  : overflow scroll 해결해서 box크기가 뷰포인트 넘게하기.
    -> 부모인Container의 width height를 %로 변경
  : react color 적용하기.
# Day 42
  : material-ui 시작.
    1. Typography
    : 더이상 h1,h2,p... type 사용할 필요가 없다.
      Typography 컴포넌트를 커스텀해서 사용.
      default theme에서 default value 확인.
# Day 43
  : history.push : history에 이동전경로가 남는다.
    JSX에서 사용 못한다.
  : redirect: 이동후에는 이동전 경로가 남지 않는다.
    JSK에서 사용가능하다.
  : Grid는 item과 container 역할을 동시에 수행할 수 있다.
  : Grid는 12colums를 나눠쓴다.
# Day 45
  : 음식 블로그 제작 시작으로 다국어 지원 라이브러리인
    i18next를 적용중.
# Day 47
  : material-ui & emotion & typescript로 css-in-js로 구현중.
  : 반응형을 위해 material-ui의 breakpoint와 고유 미디어 쿼리 문법 적용.
# Day 48
  : emotion to material-ui.
  : component 기존 css를 useStyles로 덮어씌움.
  : breakpoints: https://gist.github.com/gokulkrishh/242e68d1ee94ad05f488 
    xs: 0,
    mobile(portrait)
    !sm: 480,
    mobile(landscape), tablet 
    md: 768,
    tablet, ipad
    !lg: 1024,
    labtop,desktop
    xl: 1280,
    desktop
# Day 51
  : 포스팅 create 부분을 마크다운 + 이미지 업로드 + 지도 업로드.
# Day 53
  : index.html에 기본 css 지정해서 사용하자.
# Day 54
  : 모바일에서 제거할 컴포넌트는 class를 사용해서 간편하게 진행하자.
    ```
      removeInMobile: {
        [theme.breakpoints.down('xs')]: {
          display: 'none',
        },
      },
    ```
  : topbar 모바일시 food blog disply none하고 subtitle 홈 아이콘으로. 링크도.
  : Done!
# Day 55 DataBase
  : https://www.youtube.com/watch?v=7S_tz1z_5bA
  Database is a collection of data stored in a format that can easily be accessed. DBMS: Database Management System.
# Day 57 Express Setting
  : Nodemon & Typescript needs to use ts-node as connection.
# Day 57
  : sequelize-cli typescript 하기.
# Day 58
  : 서버에서 API GET 하기. - 포스트맨 사용
# Day 59
  : 데이터베이스 완료. 내일은 1.시퀄라이즈 구조 분석 2.스키마 생성.
# Day 60
  : 테이블 관계 정의, 패스포트 정의.
# Day 61
  : tsconfig의 module resolution 이해 필요.
--------------------
# Day 62
  : sequelize ts로 호환 별로니 typeorm으로 변경.
  