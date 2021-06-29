import './style.css'
import './image1.jpg'

const React = require('react');
const ReactDom = require('react-dom');

const App = require('./App');

ReactDom.render(<App />, document.querySelector('#root'));