const React = require('react');
const { Component } = React;

class GuguDan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: 0,
      result: '',
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(this.state.value) === (this.state.first * this.state.second)) {
      console.log('정답');
      this.setState((prevState) => {
        return {
          result: `${prevState.value} 정답이었습니다!`,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: '',
        }
      });
      this.input.focus();
    } else {
      console.log('오답');
      this.setState({
        result: `${this.state.value} 오답이었습니다!`,
        value: '',
      });
      this.input.focus();
    }
  };
  onChange = (e) => {
    this.setState({
      value: parseInt(e.target.value),
      result: ''
    });
  };
  render() {
    return (
      <>
        <div>{this.state.first}곱하기{this.state.second}는?</div>
        <form onSubmit={this.onSubmit}>
          <input ref={(ref) => { this.input = ref; }} type="number" value={this.state.value} onChange={this.onChange} />
          <button>입력!</button>
        </form> 
        <div>{this.state.result}</div>
      </>
    );  
  }
}

module.exports = GuguDan;