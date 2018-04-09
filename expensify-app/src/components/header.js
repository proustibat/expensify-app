import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact={true} activeClassName="is-active" to="/">Home</NavLink>
        <NavLink activeClassName="is-active" to="/create">Add</NavLink>
        <NavLink activeClassName="is-active" to="/edit">Edit</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </header>
);
export default Header;
