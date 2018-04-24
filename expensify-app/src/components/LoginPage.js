import React from "react";
import { connect } from 'react-redux';
import { startLogin } from "../actions/auth";

export const LoginPage = props => (
    <div>
        <h1>LoginPage</h1>
        <button onClick={ props.startLogin }>Login</button>
    </div>
);

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ( {
    startLogin: () => dispatch( startLogin() )
} );

export default connect( mapStateToProps, mapDispatchToProps )( LoginPage );


