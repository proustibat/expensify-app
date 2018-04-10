import React from 'react';
import { Link } from 'react-router-dom';

const PagePortfolio = props => (
    <div>
        <h1>Portfolio Page</h1>
        <p>Checkout the stuff:</p>
        <Link to = "/portfolio/1">Item one</Link>
        <Link to = "/portfolio/2">Item two</Link>
    </div>
);

export default PagePortfolio;
