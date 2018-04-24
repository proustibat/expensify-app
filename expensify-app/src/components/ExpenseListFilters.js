import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ( { startDate, endDate } ) => {
        this.props.setStartDate( startDate );
        this.props.setEndDate( endDate );
    };

    onFocusChange = calendarFocused => {
        this.setState( () => ( { calendarFocused } ) );
    };

    onTextChange = e => {
        this.props.setTextFilter( e.target.value );
    };

    onSortChange = e => {
        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
    };

    render() {
        return(
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            value = { this.props.filters.text }
                            onChange = { this.onTextChange }
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            value = { this.props.filters.sortBy }
                            onChange = { this.onSortChange }
                        >
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
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
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ( {
    filters: state.filters
} );

const mapDispatchToProps = dispatch => ( {
    setTextFilter: text => dispatch( setTextFilter( text ) ),
    sortByDate: () => dispatch( sortByDate() ),
    sortByAmount: () => dispatch( sortByAmount() ),
    setStartDate: startDate => dispatch( setStartDate( startDate ) ),
    setEndDate: endDate => dispatch( setEndDate( endDate ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( ExpenseListFilters );
