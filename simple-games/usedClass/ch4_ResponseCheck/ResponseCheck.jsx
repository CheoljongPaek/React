const React = require('react');
const { PureComponent, createRef } = React;
const Average = require('./Average.jsx');

class ResponseCheck extends PureComponent {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요.',
    result: [],
  }

  // timeout;
  // startTime;
  //endTime

  onClickScreen = () => {
    console.log('1');
    if (this.state.state === "waiting") {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요.',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭'
        })
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초
    } else if (this.state.state === 'ready') { //성급하게 클릭
      clearTimeout(this.timeout)
      this.setState({
        state: 'waiting',
        message:'너무 성급하시군요! 초록색이 된 후에 클릭하세요.'
      })
    } else if (this.state.state === 'now') { //반응속도 체크
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요.',
          result: [...prevState.result, this.endTime - this.startTime],
        }
      });
    }
  };

  case = (s, m, r) => {
    this.setState({
      state: s,
      message: m,
      result: r,
    })
  }
  
  render() {
    return (
      <>
        <div id="screen" className={this.state.state} onClick={this.onClickScreen}>
          {this.state.message}
        </div>
        <Average casetoChild={this.case} result={this.state.result} />
      </>
    ); 
  }
}

module.exports = ResponseCheck;