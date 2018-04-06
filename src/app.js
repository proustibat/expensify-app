
class IndecisionApp extends React.Component {

    constructor( props ) {
        super( props );

        this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
        this.handlePickOption = this.handlePickOption.bind( this );

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
                <AddOptions />
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
    handleSubmit( e ) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        if ( option ) {
            e.target.elements.option.value = '';
            console.log('value', option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render( <IndecisionApp />, document.querySelector( '#app' ) );
