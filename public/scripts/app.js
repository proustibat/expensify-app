'use strict';

console.log('App.js is running!');

var appData = {
    title: 'Here is my JSX title',
    subtitle: 'Here is my subtitle',
    options: ['one', 'two']
};
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

var count = 0;

var addOne = function addOne() {
    console.log('addOne');
    count++;
    console.log(count);
};
var minusOne = function minusOne() {
    console.log('Minus');
    count--;
    console.log(count);
};
var reset = function reset() {
    console.log('reset');
    count = 0;
    console.log(count);
};

var template3 = React.createElement(
    'div',
    { key: 'template3' },
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { id: 'btn-add', className: 'button', onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { id: 'btn-minus', className: 'button', onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { id: 'btn-reset', className: 'button', onClick: reset },
        'reset'
    )
);

var appRoot = document.querySelector('#app');
ReactDOM.render([template1, template2, template3], appRoot);
