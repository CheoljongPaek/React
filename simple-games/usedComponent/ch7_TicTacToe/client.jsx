import './style.css'
import './image1.jpg'

const React = require('react');
const ReactDom = require('react-dom');

const TicTacToe = require('./TicTacToe');

ReactDom.render(<TicTacToe />, document.querySelector('#root'));