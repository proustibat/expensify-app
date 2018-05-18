import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import selectExpensesTotal from "../selectors/expenses-total";
import { getVisibleExpenses, getHiddenExpenses } from '../selectors/expenses';
import numeral from "numeral";

export const ExpensesSummary = ( { countVisible, totalVisible, countHidden, totalHidden, countAll, totalAll } ) => {
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{ countVisible }</span><em>/{ countAll }</em> expense{ countVisible > 1 ? 's ' : ' '}
                    totalling <span>{ numeral( totalVisible / 100 ).format( '$0,0.00' ) }</span><em>/{ numeral( totalAll / 100 ).format( '$0,0.00' ) }</em>
                </h1>
                { countHidden > 0 ? (
                    <p className="page-header__subtitle"><span>{ countHidden }</span> expense{ countHidden > 1 ? 's' : ''} hidden, totalling <span>{ numeral( totalHidden / 100 ).format( '$0,0.00' ) }</span></p>
                ) : null }
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
    const hiddenExpenses = getHiddenExpenses( state.expenses, state.filters );
    return {
        countVisible: visibleExpenses.length,
        totalVisible: selectExpensesTotal( visibleExpenses ),
        countHidden: hiddenExpenses.length,
        totalHidden: selectExpensesTotal( hiddenExpenses ),
        countAll: state.expenses.length,
        totalAll: selectExpensesTotal( state.expenses )
    }
};

const ConnectedExpensesSummary = connect( mapStateToProps )( ExpensesSummary );

export default ConnectedExpensesSummary;
