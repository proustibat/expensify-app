import React from "react";
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState( () => ( { options: [] } ) );
    };

    handleClearSelectedOption = () => {
        this.setState( () => ( { selectedOption: undefined } ) );
    };

    handlePickOption = () => {
        const randomNumber = Math.floor( Math.random() * this.state.options.length );
        const option = this.state.options[ randomNumber ];
        this.setState( () => ( {
            selectedOption: option
        } ) );
    };

    handleAddOption = option => {
        if ( !option ) {
            return `Enter valid value!`;
        }
        else if ( this.state.options.indexOf( option ) > -1 ) {
            return `This option already exists!`;
        }

        this.setState( previousState => ( { options: previousState.options.concat( [ option ] ) } ) );
    };

    handleDeleteSingleOption = option  => {
        this.setState( ( previousState ) => ( { options: previousState.options.filter( ( item ) => item !== option ) } ) );
    };

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

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Action
                        hasOptions = { this.state.options.length > 0 }
                        handlePickOption = { this.handlePickOption }
                    />
                    <div className="widget">
                        <Options
                            options = { this.state.options }
                            handleDeleteOptions = { this.handleDeleteOptions }
                            handleDeleteSingleOption = { this.handleDeleteSingleOption }
                        />
                        <AddOption
                            handleAddOption = { this.handleAddOption }
                        />
                    </div>
                </div>

                <OptionModal
                    selectedOption={ this.state.selectedOption }
                    handleClearSelectedOption = { this.handleClearSelectedOption }
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
