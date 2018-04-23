import React from "react";
import { connect } from 'react-redux';
import { startLogin } from "../actions/auth";

export class LoginPage extends React.Component {

    onClickLogin = e => {
        this.props.startLogin();
    };

    render() {
        return (
            <div>
                <h1>LoginPage</h1>
                <button onClick={ this.onClickLogin }>Login</button>
            </div>
        );
    }
}

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ( {
    startLogin: () => dispatch( startLogin() )
} );

export default connect( mapStateToProps, mapDispatchToProps )( LoginPage );


