import './style.css'
import './image1.jpg'

const React = require('react');
const ReactDom = require('react-dom');

const Lotto = require('./Lotto');

ReactDom.render(<Lotto />, document.querySelector('#root'));