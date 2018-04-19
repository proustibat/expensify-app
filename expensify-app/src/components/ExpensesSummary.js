import React from "react";
import { connect } from "react-redux";
import selectExpensesTotal from "../selectors/expenses-total";
import getVisibleExpenses from '../selectors/expenses';
import numeral from "numeral";


export const ExpensesSummary = ( { count, total } ) => {
    return (
        <div>
            <h1>Viewing { count } expense{ count > 1 ? 's' : ''} totalling { numeral( total / 100 ).format( '$0,0.00' ) }</h1>
        </div>
    );
};

const mapStateToProps = state => {
    const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
    return {
        count: visibleExpenses.length,
        total: selectExpensesTotal( visibleExpenses )
    }
};

const ConnectedExpensesSummary = connect( mapStateToProps )( ExpensesSummary );

export default ConnectedExpensesSummary;
