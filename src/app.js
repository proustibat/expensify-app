console.log( 'App.js is running!' );

const appRoot = document.querySelector( '#app' );

const appData = {
    title: 'Here is my JSX title',
    subtitle: 'Here is my subtitle',
    options: [ 'one', 'two' ]
};


// JSX - Javascript XML
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

ReactDOM.render( [
    template1,
    template2
], appRoot );
