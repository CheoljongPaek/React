const React = require('react');
const { useState, useRef, memo } = React;

const Reset = memo(({ dispatch }) => {
  const onSubmitResetForm = (e) => {
    e.preventDefault();
    dispatch({ type: 'RESET'});
  };
  return (
    <>
      <form id="numberChoice" onSubmit={onSubmitResetForm}>
        <button className="reset">reset</button>
      </form>
    </>
  );
});
module.exports = Reset;