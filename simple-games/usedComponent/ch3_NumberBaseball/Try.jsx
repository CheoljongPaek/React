const React = require('react');
const { memo } = require('react');

// const Try = (props) => {
const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  )
});

module.exports = Try;