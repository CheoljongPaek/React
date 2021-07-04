import './style.css'

const React = require('react');
const ReactDom = require('react-dom');

const MineSearch = require('./MineSearch');

ReactDom.render(<MineSearch />, document.querySelector('#root'));