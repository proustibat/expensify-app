console.log( 'App.js is running!' );

// JSX - Javascript XML
// const template = <p>This is JSX from app.js</p>;
var appRoot = document.querySelector( '#app' );

var template = React.createElement(
  'h1',
  null,
  'Here is my code'
);

ReactDOM.render( template, appRoot );
