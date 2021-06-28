const React = require('react');
const { PureComponent, createRef } = React;
const Ball = require('./Ball.jsx');

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  };
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.splice(0, 6).sort((p,c) => p-c);
  return [...winNumbers, bonusNumber];
}

class Lotto extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    };
  };

  timeouts = [];

  runTimeouts = () => {
    console.log('3');
    for (let i = 0; i < this.state.winNumbers.length - 1; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, this.state.winNumbers[i]],
          };
        });
      }, (i+1)*1000);
    };
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus: this.state.winNumbers[6],
        redo: true,
      });
    }, 7000);
  };

  componentDidMount() {
    console.log('4');
    this.runTimeouts();
  };

  componentWillUnmount() {
    this.timeouts.map((v) => {
      clearTimeout(v);
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('2');
    //this.timeouts.length === 0
    if (this.state.winBalls.length === 0) {
      this.runTimeouts();
    };
  };

  onClickRedo = (e) => {
    e.preventDefault();
    this.setState({
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    });
    this.timeouts = [];
  };

  render() {
    return (
      <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {this.state.winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스!</div>
        {this.state.bonus && <Ball number={this.state.bonus} />}
        {/* <button onClick={this.state.redo ? this.onClickRedo : () => {}}>한 번 더!</ button> */}
        {this.state.redo ? <button onClick={this.onClickRedo}>한 번 더!</button> : <div></div>}
      </>
    ); 
  }
}

module.exports = Lotto;