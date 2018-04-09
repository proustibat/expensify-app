import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>This is from my Dashboard component</div>
);

const AddExpensePage = () => (
    <div>This is from my Add expense component</div>
);

const EditExpensePage = () => (
    <div>This is from my Edit expense component</div>
);

const HelpPage = () => (
    <div>This is from my Help component</div>
);

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact={true} activeClassName="is-active" to="/">Home</NavLink>
        <NavLink activeClassName="is-active" to="/create">Add</NavLink>
        <NavLink activeClassName="is-active" to="/edit">Edit</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route
                    exact = { true }
                    path = "/"
                    component = { ExpenseDashboardPage }
                />
                <Route
                    path = "/create"
                    component = { AddExpensePage }
                />
                <Route
                    path = "/edit"
                    component = { EditExpensePage }
                />
                <Route
                    path = "/help"
                    component = { HelpPage }
                />
                <Route component = { NotFoundPage } />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render( routes, document.querySelector( '#app' ) );
