const React = require('react');
const { PureComponent, Component } = React;

class Average extends PureComponent {
  onClickReset = (e) => {
    e.preventDefault();
    this.props.casetoChild('waiting', '클릭해서 시작하세요', []);
  }
  render() {
    return (
      this.props.result.length === 0 
        ? null 
        : <>
            <div>평균 시간: {this.props.result.reduce((a, c) => a + c) / this.props.result.length}ms</div>
            <button onClick={this.onClickReset}>초기화</button>
          </>
    )
  }
}

module.exports = Average;