const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '끝말잇기',
      value: '',
      result: '',
    }
  }
  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value[0] === this.state.word[this.state.word.length-1]) {
      console.log('정답');
      this.setState((prevState) => {
        return {
          result: `${prevState.value}은/는 정답이었습니다!`,
          word: `${prevState.value}`,
          value: '',
        }
      });
      this.input.focus();
    } else {
      console.log('오답');
      this.setState((prevState) => {
        return {
          result: `${prevState.value}은/는 오답이었습니다!`,
          value: '',
        }
      });
      this.input.focus();
    }
  };
  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
      result: ''
    });
  };
  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={(ref) => { this.input = ref; }} type="text" value={this.state.value} onChange={this.onChangeInput} />
          <button>입력!</button>
        </form> 
        <div>{this.state.result}</div>
      </>
    );  
  }
}

module.exports = WordRelay;