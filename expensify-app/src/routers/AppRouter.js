import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PageDashboard from "../components/page-dashboard";
import PageAdd from "../components/page-add";
import PageEdit from "../components/page-edit";
import PageHelp from "../components/page-help";
import Page404 from "../components/page-404";
import LoginPage from "../components/LoginPage";
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={ history }>
        <div>
            <Switch>
                <Route
                    exact = { true }
                    path = "/"
                    component = { LoginPage }
                />
                <PrivateRoute
                    path = "/dashboard"
                    component = { PageDashboard }
                />
                <PrivateRoute
                    path = "/create"
                    component = { PageAdd }
                />
                <PrivateRoute
                    path = "/edit/:id"
                    component = { PageEdit }
                />
                <Route
                    path = "/help"
                    component = { PageHelp }
                />
                <Route component = { Page404 } />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
