import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";

import { DateRangePicker } from 'react-dates';

class ExpenseListfilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ( { startDate, endDate } ) => {
        this.props.dispatch( setStartDate( startDate ) );
        this.props.dispatch( setEndDate( endDate ) );
    };

    onFocusChange = ( calendarFocused ) => {
        this.setState( () => ( { calendarFocused } ) );
    };

    render() {
        return(
            <div>
                <h1>Filters</h1>

                <input
                    type="text"
                    value = { this.props.filters.text }
                    onChange = { e => {
                        this.props.dispatch( setTextFilter( e.target.value ) );
                    } }
                />

                <select
                    value = { this.props.filters.sortBy }
                    onChange = { ( e ) => {
                        this.props.dispatch( e.target.value === 'date' ? sortByDate() : sortByAmount() );
                    } }
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker
                    startDate = { this.props.filters.startDate } // momentPropTypes.momentObj or null,
                    endDate = { this.props.filters.endDate } // momentPropTypes.momentObj or null,
                    onDatesChange = { this.onDatesChange } // PropTypes.func.isRequired,
                    focusedInput = { this.state.calendarFocused } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange = { this.onFocusChange } // PropTypes.func.isRequired,
                    showClearDates = { true }
                    numberOfMonths = { 1 }
                    isOutsideRange = { () => false }
                />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        filters: state.filters
    };
};

export default connect( mapStateToProps )( ExpenseListfilters );
