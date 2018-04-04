const appRoot = document.querySelector( '#app' );

const user = {
    name: 'Jenni',
    age: 32,
    location: 'Paris'
};
const getLocation = location => location ? <p>Location: { location }</p> : undefined;
const template = (
    <div>
        {/*ternary operator*/}
        <h1>{ user.name ? user.name.toUpperCase() : 'Anonymous' }</h1>
        {/*logical and operator*/}
        { ( user.age && user.age >= 18 ) && <p>Age: { user.age }</p> }
        {/*if statement*/}
        { getLocation( user.location ) }
    </div>
);
ReactDOM.render( template, appRoot );
