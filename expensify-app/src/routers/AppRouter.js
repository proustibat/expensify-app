import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from "../components/page-dashboard";
import AddExpensePage from "../components/page-add";
import EditExpensePage from "../components/page-edit";
import HelpPage from "../components/page-help";
import NotFoundPage from "../components/page-404";
import Header from "../components/Header";


const AppRouter = () => (
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

export default AppRouter;
