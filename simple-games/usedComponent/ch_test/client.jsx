import './style.css'
import './image1.jpg'

const React = require('react');
const ReactDom = require('react-dom');

const Test = require('./Test');

ReactDom.render(<Test />, document.querySelector('#root'));