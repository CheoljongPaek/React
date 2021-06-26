const React = require('react');
const { PureComponent, Component } = React;

class Score extends PureComponent {
  render() {
    console.log('1');
    return (
      <>
        <div>현재 {this.props.score}점!</div>
      </>
    )
  }
}

module.exports = Score;