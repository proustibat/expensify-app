import React from 'react';
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from '../selectors/expenses';


const ExpenseList = ( props ) => (
    <div>
        <h1>
            Expense List
        </h1>

        { props.expenses.map( expense => (
            <ExpenseListItem
                key = { expense.id }
                { ...expense }
            />
        ) ) }

    </div>
);

const mapStateToProps = state => ( {
    expenses: getVisibleExpenses( state.expenses, state.filters )
} );

const ConnectedExpenseList = connect( mapStateToProps )( ExpenseList );

export default ConnectedExpenseList;
