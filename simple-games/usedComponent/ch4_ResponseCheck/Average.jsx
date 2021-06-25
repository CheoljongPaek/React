const React = require('react');
// const {  } = React;

const Average = ({casetoChild, result}) => {
  console.log(result);
  onClickReset = (e) => {
    e.preventDefault();
    casetoChild('waiting', '클릭해서 시작하세요', []);
  }

  return (
    result.length === 0 
      ? null 
      : <>
          <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
          <button onClick={onClickReset}>초기화</button>
        </>
  )
}

module.exports = Average;