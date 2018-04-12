import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate} from "../actions/filters";

const ExpenseListfilters = props => (
    <div>
        <h1>Filters</h1>

        <input
            type="text"
            value = { props.filters.text }
            onChange={ e => {
                props.dispatch( setTextFilter( e.target.value ) );
            } }
        />

        <select
            value = { props.filters.sortBy }
            onChange = { ( e ) => {
                props.dispatch( e.target.value === 'date' ? sortByDate() : sortByAmount() );
            } }
        >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
    </div>
);

const mapStateToProps = state => {
    return {
        filters: state.filters
    };
};

export default connect( mapStateToProps )( ExpenseListfilters );
