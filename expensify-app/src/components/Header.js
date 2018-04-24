import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";


export const Header = ( { startLogout } ) => (
    <header>
        <h1><Link to="/">Expensify</Link></h1>
        <NavLink activeClassName="is-active" to="/dashboard" exact={ true } >Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create">Add</NavLink>
        <button onClick={ startLogout }>Logout</button>
    </header>
);

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ( {
    startLogout: () => dispatch( startLogout() )
} );

export default connect( mapStateToProps, mapDispatchToProps )( Header );
