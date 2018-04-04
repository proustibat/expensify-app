'use strict';

console.log('App.js is running!');

var appRoot = document.querySelector('#app');

var appData = {
    title: 'Here is my JSX title',
    subtitle: 'Here is my subtitle',
    options: ['one', 'two']
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
    appData.subtitle && React.createElement(
        'p',
        null,
        appData.subtitle
    ),
    React.createElement(
        'p',
        null,
        appData.options && appData.options.length > 0 ? 'Here are your options' : 'No options'
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

var getLocation = function getLocation(location) {
    return location ? React.createElement(
        'p',
        null,
        'Location: ',
        location
    ) : undefined;
};

var template2 = React.createElement(
    'div',
    { key: 'template2' },
    React.createElement(
        'h1',
        null,
        user.name ? user.name.toUpperCase() : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

ReactDOM.render([template1, template2], appRoot);
