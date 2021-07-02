import './style.css'

const React = require('react');
const ReactDom = require('react-dom');

const SetGame = require('./SetGame');

ReactDom.render(<SetGame />, document.querySelector('#root'));