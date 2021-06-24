const React = require('react');
const { PureComponent, Component } = React;


class Searchbar extends Component { //자식

  state = { text: '' };

  onFormSubmit = e => {
    console.log('1');
    e.preventDefault();
      this.props.onSubmit('life', 'B');
  }

  render() {
    return (
    <div>
      <form onSubmit={this.onFormSubmit}>
      <input 
          value={this.state.text}
          onChange={(e) => {this.setState({ text: e.target.value})}}/>
      </form>
    </div>
    )
  }
}

class App extends Component { // 부모
  state = {
    value: '',
    blank: 'shouldbeB'
  };
  onSearchSubmit = (text, abc) => {
    this.setState({
      value: text,
      blank: abc,
    });
    console.log(text);
  }

  render () {
    return (
      <div>
         <Searchbar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }  
}

/*
!! 부모가 자식 조작을 통해 값 변경 !!
1: 부모가 컨트롤러로 setState를 담고있는 함수!를 자식에게 넘김(props를 통해서)
2: 받은 함수를 자식은 특정 조건 하에 사용.
*/

module.exports = App;