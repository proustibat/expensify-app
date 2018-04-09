import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
    <div>404 Component</div>
);

const routes = (
    <BrowserRouter>
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
    </BrowserRouter>
);

ReactDOM.render( routes, document.querySelector( '#app' ) );
