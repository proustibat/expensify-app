import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const PageDashboard = () => (
    <div>
        <ExpenseList />
        <ExpenseListFilters />
    </div>
);

export default PageDashboard
