import React from 'react';
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from '../selectors/expenses';

export const ExpenseList = props => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-only-on-mobile">Expenses</div>
            <div className="show-only-on-desktop">Expense</div>
            <div className="show-only-on-desktop">Amount</div>
        </div>

        <div className="list-body">
            { props.expenses.length === 0 ? (
                <div className=" list-item list-item--message">
                    <span>No expenses</span>
                </div>
            ) : (
                props.expenses.map( expense => (
                    <ExpenseListItem
                        key = { expense.id }
                        { ...expense }
                    />
                ) )
            ) }
        </div>
    </div>
);

const mapStateToProps = state => ( {
    expenses: getVisibleExpenses( state.expenses, state.filters )
} );

const ConnectedExpenseList = connect( mapStateToProps )( ExpenseList );

export default ConnectedExpenseList;
