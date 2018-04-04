console.log( 'App.js is running!' );

const appRoot = document.querySelector( '#app' );

// JSX - Javascript XML
const template1 = (
    <div key='template1'>
        <h1>This is JSX from app.js</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const template2 = (
  <div  key='template2'>
      <h1>Jenni</h1>
      <p>Age: 32</p>
      <p>Location: Paris</p>
  </div>
);

ReactDOM.render( [
    template1,
    template2
], appRoot );
