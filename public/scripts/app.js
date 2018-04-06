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
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteSingleOption = _this.handleDeleteSingleOption.bind(_this);

        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
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
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return "Enter valid value!";
            } else if (this.state.options.indexOf(option) > -1) {
                return "This option already exists!";
            }

            this.setState(function (previousState) {
                return { options: previousState.options.concat([option]) };
            });
        }
    }, {
        key: "handleDeleteSingleOption",
        value: function handleDeleteSingleOption(option) {
            this.setState(function (previousState) {
                return { options: previousState.options.filter(function (item) {
                        return item !== option;
                    }) };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePickOption: this.handlePickOption
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteSingleOption: this.handleDeleteSingleOption
                }),
                React.createElement(AddOptions, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: ["Item one", "Item Two"]
};

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        props.title && React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            "h2",
            null,
            props.subTitle
        )
    );
};
Header.defaultProps = {
    title: "Indecision App",
    subTitle: "Bla bli blou"
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                onClick: props.handlePickOption,
                disabled: !props.hasOptions
            },
            "What should I do?"
        )
    );
};

var Options = function Options(props) {
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
            { onClick: props.handleDeleteOptions },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            props.options.map(function (value, i) {
                return React.createElement(Option, {
                    key: i,
                    value: value,
                    handleDeleteSingleOption: props.handleDeleteSingleOption
                });
            })
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        "li",
        null,
        React.createElement(
            "p",
            null,
            props.value,
            React.createElement(
                "button",
                { onClick: function onClick(e) {
                        props.handleDeleteSingleOption(props.value);
                    } },
                "Remove"
            )
        )
    );
};

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
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
