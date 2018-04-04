console.log( 'App.js is running!' );

const appData = {
    title: 'Here is my JSX title',
    subtitle: 'Here is my subtitle',
    options: [ 'one', 'two' ]
};
const template1 = (
    <div key='template1'>
        <h1>{ appData.title }</h1>
        { appData.subtitle && <p>{ appData.subtitle }</p> }
        <p>{ ( appData.options && appData.options.length > 0 ) ? 'Here are your options' : 'No options' }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
const appRoot1 = document.querySelector( '#app1' );
ReactDOM.render( template1, appRoot1 );


const user = {
    name: 'Jenni',
    age: 32,
    location: 'Paris'
};
const getLocation = location => location ? <p>Location: { location }</p> : undefined;
const template2 = (
  <div  key='template2'>
      {/*ternary operator*/}
      <h1>{ user.name ? user.name.toUpperCase() : 'Anonymous' }</h1>
      {/*logical and operator*/}
      { ( user.age && user.age >= 18 ) && <p>Age: { user.age }</p> }
      {/*if statement*/}
      { getLocation( user.location ) }
  </div>
);
const appRoot2 = document.querySelector( '#app2' );
ReactDOM.render( template2, appRoot2 );


let count = 0;
const addOne = () => {
    console.log( 'addOne' );
    count++;
    renderCounter();
};
const minusOne = () => {
    console.log( 'Minus' );
    count--;
    renderCounter();
};
const reset = () => {
    console.log( 'reset' );
    count = 0;
    renderCounter();
};

const appRoot3 = document.querySelector( '#app3' );

const renderCounter = () => {
    const template3 = (
        <div key="template3">
            <h1>Count: { count }</h1>
            <button id="btn-add" className="button" onClick = { addOne }>+1</button>
            <button id="btn-minus" className="button" onClick = { minusOne }>-1</button>
            <button id="btn-reset" className="button" onClick = { reset }>reset</button>
        </div>
    );
    ReactDOM.render( template3, appRoot3 );
};

renderCounter();
