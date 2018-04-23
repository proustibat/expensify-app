import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1><Link to="/">Expensify</Link></h1>
        <NavLink activeClassName="is-active" to="/dashboard" exact={true} >Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create">Add</NavLink>
    </header>
);

export default Header;
