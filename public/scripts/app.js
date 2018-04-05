"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Indecision App"
                ),
                React.createElement(
                    "h2",
                    null,
                    "Don't choose by yourself, let the app make it for you!"
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    null,
                    "What should I do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "'Here are your options' / No options'"
                ),
                React.createElement(
                    "button",
                    null,
                    "Remove All"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "item one"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "item two"
                    )
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOptions = function (_React$Component4) {
    _inherits(AddOptions, _React$Component4);

    function AddOptions() {
        _classCallCheck(this, AddOptions);

        return _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).apply(this, arguments));
    }

    _createClass(AddOptions, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    null,
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

var jsx = React.createElement(
    "div",
    null,
    React.createElement(Header, null),
    React.createElement(Action, null),
    React.createElement(Options, null),
    React.createElement(AddOptions, null)
);

ReactDOM.render(jsx, document.querySelector('#app'));
