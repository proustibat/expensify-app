
class IndecisionApp extends React.Component {

    constructor( props ) {
        super( props );

        this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
        this.handlePickOption = this.handlePickOption.bind( this );
        this.handleAddOption = this.handleAddOption.bind( this );

        this.state = {
            options: props.options
        }
    }

    handleDeleteOptions() {
        this.setState( () => {
            return {
                options: []
            };
        } );
    }

    handlePickOption() {
        const randomNumber = Math.floor( Math.random() * this.state.options.length );
        const option = this.state.options[ randomNumber ];
        alert( option );
    }

    handleAddOption( option ) {
        if ( !option ) {
            return `Enter valid value!`;
        }
        else if ( this.state.options.indexOf( option ) > -1 ) {
            return `This option already exists!`;
        }

        this.setState( ( previousState ) => {
            return {
                options: previousState.options.concat( [ option ] )
            }
        } );
    }

    render() {
        return (
            <div>
                <Header />
                <Action
                    hasOptions = { this.state.options.length > 0 }
                    handlePickOption = { this.handlePickOption }
                />
                <Options
                    options = { this.state.options }
                    handleDeleteOptions = { this.handleDeleteOptions }
                />
                <AddOptions
                    handleAddOption = { this.handleAddOption }
                />
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
  options: [
      "Item one",
      "Item Two"
  ]
};

const Header = ( props ) => {
    return (
        <div>
            { props.title && <h1>{ props.title }</h1> }
            { props.subTitle && <h2>{ props.subTitle }</h2> }
        </div>
    );
};
Header.defaultProps = {
    title : "Indecision App",
    subTitle : "Bla bli blou"
};

const Action = ( props ) => {
    return (
        <div>
            <button
                onClick = { props.handlePickOption }
                disabled = { !props.hasOptions }
            >What should I do?
            </button>
        </div>
    );
};

const Options = ( props ) => {
    return (
        <div>
            <p>'Here are your options' / No options'</p>
            <button onClick={ props.handleDeleteOptions }>Remove All</button>
            <ol>
                {
                    props.options.map( ( value, i ) => <Option key={ i } value={ value } /> )
                }
            </ol>
        </div>
    );
};

const Option = ( props ) => {
    return (
        <li>{ props.value }</li>
    );
};

class AddOptions extends React.Component {
    constructor( props ) {
        super( props );
        this.handleSubmit = this.handleSubmit.bind( this );
        this.state = {
            error: undefined
        };
    }

    handleSubmit( e ) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption( option );
        this.setState( () => {
            return { error }
        } );

        if ( !error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                { this.state.error && <p>{ this.state.error }</p>}
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render( <IndecisionApp />, document.querySelector( '#app' ) );
