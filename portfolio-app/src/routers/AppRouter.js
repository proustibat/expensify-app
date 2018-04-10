import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFoundPage from "../components/page-404";
import Header from "../components/Header";
import PageHome from "../components/page-home";
import PagePortfolioItem from "../components/page-portfolio-item";
import PageContact from "../components/page-contact";
import PagePortfolio from "../components/page-portfolio";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route
                    exact = { true }
                    path = "/"
                    component = { PageHome }
                />
                <Route
                    exact = { true }
                    path = "/portfolio"
                    component = { PagePortfolio }
                />
                <Route
                    path = "/portfolio/:id"
                    component = { PagePortfolioItem }
                />
                <Route
                    path = "/contact"
                    component = { PageContact }
                />
                <Route component = { NotFoundPage } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
