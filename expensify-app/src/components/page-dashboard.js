import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const PageDashboard = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default PageDashboard
