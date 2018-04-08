import React from "react";
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

class IndecisionApp extends React.Component {

    constructor( props ) {
        super( props );

        this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
        this.handlePickOption = this.handlePickOption.bind( this );
        this.handleAddOption = this.handleAddOption.bind( this );
        this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind( this );

        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        // fetching data
        try {
            const json = localStorage.getItem( 'options' );
            const options = JSON.parse( json );
            if( options ) {
                this.setState( () => ( { options } ) );
            }
        }
        catch( e ) {
            // Do nothing
        }
    }

    componentDidUpdate( previousProps, previousState ) {
        // saving data
        if ( previousState.options.length !== this.state.options.length ) {
            const json = JSON.stringify( this.state.options );
            localStorage.setItem( "options", json );
        }
    }

    componentWillUnmount() {
        console.log( 'IndecisionApp::componentWillUnmount' );
    }

    handleDeleteOptions() {
        this.setState( () => ( { options: [] } ) );
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

        this.setState( previousState => ( { options: previousState.options.concat( [ option ] ) } ) );
    }

    handleDeleteSingleOption( option ) {
        this.setState( ( previousState ) => ( { options: previousState.options.filter( ( item ) => item !== option ) } ) );
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
                    handleDeleteSingleOption = { this.handleDeleteSingleOption }
                />
                <AddOption
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

export default IndecisionApp;
