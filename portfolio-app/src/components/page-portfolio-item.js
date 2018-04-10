import React from 'react';

const PagePortfolioItem = props => (
    <div>
        <h1>Portfolio Item</h1>
        <p>Item { props.match.params.id }</p>
    </div>
);

export default PagePortfolioItem;
