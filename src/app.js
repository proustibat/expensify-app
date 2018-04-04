console.log( 'App.js is running!' );

const appRoot = document.querySelector( '#app' );

const appData = {
    title: 'Here is my JSX title',
    subtitle: 'Here is my subtitle'
};

// JSX - Javascript XML
const template1 = (
    <div key='template1'>
        <h1>{ appData.title }</h1>
        <p>{ appData.subtitle }</p>
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

const template2 = (
  <div  key='template2'>
      <h1>{ user.name.toUpperCase() }</h1>
      <p>Age: { user.age }</p>
      <p>Location: { user.location }</p>
  </div>
);

ReactDOM.render( [
    template1,
    template2
], appRoot );
