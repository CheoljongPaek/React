const React = require('react');
const { PureComponent, createRef } = React;
const Score = require('./Score.jsx');

// client.jsx(부모)가 RSP(자식)을 렌더링시킴.(ReactDom.render(<RSP />, document.querySelector('#root'));)
// Class인 경우 실행 순서: 
// 첫 렌더링: constructor -> render -> ref -> 첫 렌더링 후! componentDidMount
// 리 렌더링(setState 바뀔 때 또는 부모가props를 바꿀 때): ..shouldComponentUpdate(true일 때) -> render -> componentDidUpdate
// 부모가 나를 없앴을 때 -> compnentWillUnmount -> 소멸 

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
// 플레이어 이기는 경우:
// 플레이어: 가위 바위 보 
// 컴퓨터!!: 보   가위 바위 
// scores 각각 빼보면 이기는 경우의 수는 2, -1
//          2    -1   -1

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find((v)=> {
    if (v[1] === imgCoord) {
      return true;
    }
  })[0];
}

class RSP extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      result: '',
      imgCoordX: '0',
      score: 0,
      // isClicked: false, // 화면에 영향 안 가니 수정필요.
      //바위: 0 가위: -142 보: -284
    };
  }
  interval;
  isClicked;
  changeHand = () => {
    console.log('1');
    if (this.state.imgCoordX === rspCoords.바위) {
      this.setState({
        imgCoordX: rspCoords.가위,
      });
    } else if (this.state.imgCoordX === rspCoords.가위) {
      this.setState({
        imgCoordX: rspCoords.보,
      });
    } else if (this.state.imgCoordX === rspCoords.보) {
      this.setState({
        imgCoordX: rspCoords.바위,
      });
    }
  };
  //비동기 관리!!!!!!!
  //렌더가 처음 시작했을때 실행, rerendering에는 영향 X, 비동기 요청을 많이 함.
  componentDidMount() {
    this.interval = setInterval(this.changeHand, 1000);
    this.isClicked = false;
  };

  //리렌더링 후에 실행.
  // componentDidUpdate() {
  // }

  //컴포넌트가 제거되기 직전 사용. componentDidMount에서 했던 작업들(비동기 요청들 등)을 제거하는 용도(componentDidMout에서 실행한 비동기는 계속 실행되거나 중복 실행). 두 함수가 짝
  // 부모가 이 컴포넌트를 없애는 경우
  componentWillUnmount() {
    clearInterval(this.interval);

  };

  onClickBtn = (choice) => () => {// 가위 바위 보 string
    console.log('컴퓨터: ', computerChoice(this.state.imgCoordX));
    if (this.isClicked === false) {
      clearInterval(this.interval);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(this.state.imgCoordX)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.setState({
          result: '비겼습니다.',
        });
      } else if ([-1, 2].includes(diff)) {
        this.setState((prevState) => {
          return {
            result: '이겼습니다!',
            score: prevState.score +1,
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            result: '졌습니다!',
            score: prevState.score -1,
          };
        });
      }
      // 클릭시 setTimeout동안 클릭 비활성화
      // this.setState({
      //   isClicked: true,
      // });
      this.isClicked = true;
      setTimeout(() => {
        this.isClicked = false;
        this.interval = setInterval(this.changeHand, 1000);
      }, 2000); 
    }
  };

  render() {
    return (
      <>
        <div id="computer" style={{backgroundPositionX: this.state.imgCoordX, backgroundPositionY: 0 }}></div>
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>
          <div>{this.state.result}</div>
          {/* <div>현재 {this.state.score}점</div> */}
          <Score score={this.state.score} />
        </div>
      </>
    ); 
  }
}

module.exports = RSP;