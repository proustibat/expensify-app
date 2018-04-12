import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from "../actions/filters";

const ExpenseListfilters = props => (
    <div>
        <h1>Filters</h1>
        <input type="text" value = { props.filters.text } onChange={ e => {
            props.dispatch( setTextFilter( e.target.value ) );
        } } />
    </div>
);

const mapStateToProps = state => {
    return {
        filters: state.filters
    };
};

export default connect( mapStateToProps )( ExpenseListfilters );
