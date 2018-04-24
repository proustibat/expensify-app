import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PageDashboard from "../components/page-dashboard";
import PageAdd from "../components/page-add";
import PageEdit from "../components/page-edit";
import PageHelp from "../components/page-help";
import Page404 from "../components/page-404";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";

export const history = createHistory();

const AppRouter = () => (
    <Router history={ history }>
        <div>
            <Header />
            <Switch>
                <Route
                    exact = { true }
                    path = "/"
                    component = { LoginPage }
                />
                <Route
                    path = "/dashboard"
                    component = { PageDashboard }
                />
                <Route
                    path = "/create"
                    component = { PageAdd }
                />
                <Route
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
