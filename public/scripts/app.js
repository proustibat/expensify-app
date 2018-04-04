'use strict';

console.log('App.js is running!');

// JSX - Javascript XML
var template = React.createElement(
  'h1',
  null,
  'This is JSX from app.js'
);
var appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);
