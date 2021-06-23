const React = require('react');
const { PureComponent } = React;

class Test extends PureComponent {
  state = {
    text: 'Hello, webpack',
    number: 1,
    boolean: true,
    object: {},
    array: [],
  };

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (this.state.text !== nextState.text) {
  //     return true;
  //   }
  //   return false;
  // }

  onClick = () => {
    this.setState({});
  };

  render() {
    return(
      <>
        <button onClick={this.onClick}>클릭</button>
        <div>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </div>
      </>
    ) 
  }
}

module.exports = Test;