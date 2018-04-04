'use strict';

console.log('App.js is running!');

var appRoot = document.querySelector('#app');

var appData = {
    title: 'Here is my JSX title',
    subtitle: 'Here is my subtitle'
};

// JSX - Javascript XML
var template1 = React.createElement(
    'div',
    { key: 'template1' },
    React.createElement(
        'h1',
        null,
        appData.title
    ),
    React.createElement(
        'p',
        null,
        appData.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Jenni',
    age: 32,
    location: 'Paris'
};

var template2 = React.createElement(
    'div',
    { key: 'template2' },
    React.createElement(
        'h1',
        null,
        user.name.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

ReactDOM.render([template1, template2], appRoot);
