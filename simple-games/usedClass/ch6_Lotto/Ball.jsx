const React = require('react');
const { PureComponent, Component, memo } = React;

const Ball = memo(({ number }) => {
  console.log('Ball');
    let background;
    if (number <= 10) {
      background = 'red';
    } else if (number <= 20) {
      background = 'orange';
    } else if (number <= 30) {
      background = 'yellow';
    } else if (number <= 40) {
      background = 'blue';
    } else {
      background = 'green';
    }
    return (
      <>
        <div className="ball" style ={{background}}>{number}</div>
      </>
    );
});

// class Ball extends PureComponent {
//   render() {
//     console.log('Ball');
//     let background;
//     if (this.props.number <= 10) {
//       background = 'red';
//     } else if (number <= 20) {
//       background = 'orange';
//     } else if (number <= 30) {
//       background = 'yellow';
//     } else if (number <= 40) {
//       background = 'blue';
//     } else {
//       background = 'green';
//     }
//     return (
//       <>
//         <div className="ball" style ={{background}}>{this.props.number}</div>
//       </>
//     )
//   }
// }

module.exports = Ball;