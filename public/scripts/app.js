'use strict';

console.log('App.js is running!');

var appRoot = document.querySelector('#app');

// JSX - Javascript XML
var template1 = React.createElement(
    'div',
    { key: 'template1' },
    React.createElement(
        'h1',
        null,
        'This is JSX from app.js'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
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

var template2 = React.createElement(
    'div',
    { key: 'template2' },
    React.createElement(
        'h1',
        null,
        'Jenni'
    ),
    React.createElement(
        'p',
        null,
        'Age: 32'
    ),
    React.createElement(
        'p',
        null,
        'Location: Paris'
    )
);

ReactDOM.render([template1, template2], appRoot);
