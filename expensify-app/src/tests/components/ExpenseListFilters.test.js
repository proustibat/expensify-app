import React from 'react';
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { altFilters, filters } from "../fixtures/filters";
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;


beforeEach( () => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters
            filters = { filters }
            setTextFilter = { setTextFilter }
            sortByDate = { sortByDate }
            sortByAmount = { sortByAmount }
            setStartDate = { setStartDate }
            setEndDate = { setEndDate }
        />
    );
} );

test( 'Should render filters component correctly', () => {
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render filters component with alt data correctly', () => {
    wrapper.setProps( {
        filters: altFilters
    } );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should handle text change', () => {
    const value = 'new input value';
    wrapper.find( 'input' ).first().simulate( 'change', { target: { value } } );
    expect( setTextFilter ).toHaveBeenLastCalledWith( value );
} );

test( 'Should sort by date', () => {
    const value = 'date';
    wrapper.setProps( {
        filters: altFilters
    } );
    wrapper.find( 'select' ).simulate( 'change', { target: { value } } );
    expect( sortByDate ).toHaveBeenCalled();
} );

test( 'Should sort by amount', () => {
    const value = 'amount';
    wrapper.find( 'select' ).simulate( 'change', { target: { value } } );
    expect( sortByAmount ).toHaveBeenCalled();
} );

test( 'Should handle date changes', () => {
    const startDate = moment( 0 ).add( 4, 'years' );
    const endDate = moment( 0 ).add( 8, 'years' );
    wrapper.find( 'DateRangePicker' ).prop( 'onDatesChange' )( { startDate, endDate } );
    expect( setStartDate ).toHaveBeenLastCalledWith( startDate );
    expect( setEndDate ).toHaveBeenLastCalledWith( endDate );
} );

test( 'Should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find( 'DateRangePicker' ).prop( 'onFocusChange' )( calendarFocused );
    expect( wrapper.state( 'calendarFocused' ) ).toBe( calendarFocused );
} );
