const React = require('react');
const { PureComponent, createRef } = React;
const Try = require('./Try.jsx');

function getNumbers() { //숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  console.log('클래스는 함수형과 다르게 이 함수의 렌더링 문제 없음');
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

class NumberBaseball extends PureComponent {
  state = {
    value: '',
    result: '',
    tries: [],
    answer: getNumbers(),
  }
  
  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join('')) { // 정답
      console.log(this.state.value);
      this.setState((prevState) => {
        return {
          result: '홈런!',
          tries: [...prevState .tries, {try: this.state.value, result: '홈런!'}]
        }
      })
      alert('정답! 게임을 다시 시작합니다!');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });
      this.onInputRef.current.focus();
    } else { // 오답
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) { // 오답1 10번이상 틀렸을 때
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다!`
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
        this.onInputRef.current.focus();
      } else {// 오답2 틀릴때마다
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, {try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
            value: '',
          }
        })
        this.onInputRef.current.focus();
      }
    }
  };
  onChangeInput = (e) => {
    // console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };
  onInputRef = createRef();
  
  render() {
    return (
      <>
        <div>{this.state.result}</div>
        <form onSubmit={this.onSubmitForm}>
          <input autoFocus maxLength={4} ref={this.onInputRef} type="text" value={this.state.value} onChange={this.onChangeInput} />
          <button>입력!</button>
        </form> 
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            return (
              <Try key={`${i+1}차 시도 :`} tryInfo={v} index={i} />
            );
          })}
        </ul>
      </>
    ); 
  }
}

module.exports = NumberBaseball;