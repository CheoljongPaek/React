import './style.css'
import './image1.jpg'

const React = require('react');
const ReactDom = require('react-dom');

const RSP = require('./RSP');

ReactDom.render(<RSP />, document.querySelector('#root'));