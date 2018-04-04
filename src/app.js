console.log( 'App.js is running!' );

// JSX - Javascript XML
const template = <h1>This is JSX from app.js</h1>;
const appRoot = document.querySelector( '#app' );

ReactDOM.render( template, appRoot );
