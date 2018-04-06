"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePickOption = _this.handlePickOption.bind(_this);

        _this.state = {
            options: ["Item one", "Item Two"]
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handlePickOption",
        value: function handlePickOption() {
            var randomNumber = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNumber];
            alert(option);
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision App";
            var subTitle = "Don't choose by yourself, let the app makes it for you!";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, {
                    title: title,
                    subTitle: subTitle
                }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePickOption: this.handlePickOption
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOptions, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

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
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subTitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action(props) {
        _classCallCheck(this, Action);

        var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        _this3.handlePick = _this3.handlePick.bind(_this3);
        return _this3;
    }

    _createClass(Action, [{
        key: "handlePick",
        value: function handlePick() {
            this.props.handlePickOption();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    {
                        onClick: this.handlePick,
                        disabled: !this.props.hasOptions
                    },
                    "What should I do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this4.onRemoveAll = _this4.onRemoveAll.bind(_this4);
        return _this4;
    }

    _createClass(Options, [{
        key: "onRemoveAll",
        value: function onRemoveAll() {
            this.props.handleDeleteOptions();
        }
    }, {
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
                    { onClick: this.onRemoveAll },
                    "Remove All"
                ),
                React.createElement(
                    "ol",
                    null,
                    this.props.options.map(function (value, i) {
                        return React.createElement(Option, { key: i, value: value });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                this.props.value
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOptions = function (_React$Component6) {
    _inherits(AddOptions, _React$Component6);

    function AddOptions() {
        _classCallCheck(this, AddOptions);

        return _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).apply(this, arguments));
    }

    _createClass(AddOptions, [{
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value;
            if (option) {
                e.target.elements.option.value = '';
                console.log('value', option);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
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

ReactDOM.render(React.createElement(IndecisionApp, null), document.querySelector('#app'));
