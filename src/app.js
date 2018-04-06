
class IndecisionApp extends React.Component {

    constructor( props ) {
        super( props );

        this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
        this.handlePickOption = this.handlePickOption.bind( this );
        this.handleAddOption = this.handleAddOption.bind( this );

        this.state = {
            options: [ "Item one", "Item Two" ]
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
        const title = "Indecision App";
        const subTitle = "Don't choose by yourself, let the app makes it for you!";

        return (
            <div>
                <Header
                    title = { title }
                    subTitle = { subTitle }
                />
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

class Header extends React.Component {
    render() {
        return (
          <div>
              <h1>{ this.props.title }</h1>
              <h2>{ this.props.subTitle }</h2>
          </div>
        );
    }
}

class Action extends React.Component {
    constructor( props ) {
        super( props );
        this.handlePick = this.handlePick.bind( this );
    }

    handlePick() {
        this.props.handlePickOption();
    }

    render() {
        return (
            <div>
                <button
                    onClick = { this.handlePick }
                    disabled = { !this.props.hasOptions }
                >What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor( props ) {
        super( props );
        this.onRemoveAll = this.onRemoveAll.bind( this );
    }

    onRemoveAll() {
        this.props.handleDeleteOptions();
    }

    render() {
        return (
            <div>
                <p>'Here are your options' / No options'</p>
                <button onClick={ this.onRemoveAll }>Remove All</button>
                <ol>
                    {
                        this.props.options.map( ( value, i ) => <Option key={ i } value={ value } /> )
                    }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{ this.props.value }</li>
        );
    }
}

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
