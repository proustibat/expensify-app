import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from "../../actions/filters";
import moment from 'moment';

test( 'should generate set start date action object', () => {
    expect( setStartDate( moment( 0 ) ) ).toEqual( { type: 'SET_START_DATE', startDate: moment( 0 ) } );
} );

test( 'should generate set end date action object', () => {
    expect( setEndDate( moment( 0 ) ) ).toEqual( { type: 'SET_END_DATE', endDate: moment( 0 ) } );
} );

test( 'should generate set text filter object with text value', () => {
    const text = 'blabliblou';
    expect( setTextFilter( text ) ).toEqual( { type: 'SET_TEXT_FILTER', text } );
} );

test( 'should generate set text filter object with no value', () => {
    expect( setTextFilter() ).toEqual( { type: 'SET_TEXT_FILTER', text: '' } );
} );

test( 'should generate action object for sort by date', () => {
    expect( sortByDate() ).toEqual( { type: 'SORT_BY_DATE', sortBy: 'date' } )
} );

test( 'should generate action object for sort by amount', () => {
    expect( sortByAmount() ).toEqual( { type: 'SORT_BY_AMOUNT', sortBy: 'amount' } )
} );
