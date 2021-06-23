const React = require('react');
const { PureComponent, Component } = React;

class Try extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.tryInfo !== nextProps.tryInfo) {
      return true
    }
    return false
  }

  render() {
    return (
      <li>
        <div>{this.props.tryInfo.try}</div>
        <div>{this.props.tryInfo.result}</div>
      </li>
    )
  }
}

module.exports = Try;