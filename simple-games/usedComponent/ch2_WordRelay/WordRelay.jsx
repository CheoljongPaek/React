const React = require('react');
const { Component, useState } = React;

const WordRelay = () => {
  const [word, setWord] = useState('끝말잇기');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = React.useRef(null);

  
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value[0] === this.state.word[this.state.word.length-1]) {
      console.log('정답');
      setResult(`${prevState.value}은/는 정답이었습니다!`);
      setWord(`${prevState.value}`);
      setValue('');
      inputRef.current.focus();
    } else {
      console.log('오답');
      setResult(`${prevState.value}은/는 오답이었습니다!`);
      setValue('');
      inputRef.current.focus();
    }
  };


  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자입력</label>
        <input id="wordInput" className="wordInput" ref={inputRef} type="text" value={value} onChange={onChangeInput} />
        <button>입력!</button>
      </form> 
      <div>{result}</div>
    </>
  );
}

module.exports = WordRelay;