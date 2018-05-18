import { getVisibleExpenses, getHiddenExpenses } from '../../selectors/expenses';
import moment from "moment";
import expenses from "../fixtures/expenses";

test ( 'should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const resultVisible = getVisibleExpenses( expenses, filters );
    expect( resultVisible ).toEqual( [ expenses[ 2 ], expenses[ 1 ] ] );

    const resultHidden = getHiddenExpenses( expenses, filters );
    expect( resultHidden ).toEqual( [ expenses[ 0 ] ] );
} );

test ( 'should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment( 0 ),
        endDate: undefined
    };

    const resultVisible = getVisibleExpenses( expenses, filters );
    expect( resultVisible ).toEqual( [ expenses[ 2 ], expenses[ 0 ] ] );

    const resultHidden = getHiddenExpenses( expenses, filters );
    expect( resultHidden ).toEqual( [ expenses[ 1 ] ] );
} );

test ( 'should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment( 0 ).add( 2, 'days' )
    };

    const resultVisible = getVisibleExpenses( expenses, filters );
    expect( resultVisible ).toEqual( [ expenses[ 0 ], expenses[ 1 ] ] );

    const resultHidden = getHiddenExpenses( expenses, filters );
    expect( resultHidden ).toEqual( [ expenses[ 2 ] ] );
} );

test ( 'should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const resultVisible = getVisibleExpenses( expenses, filters );
    expect( resultVisible ).toEqual( [ expenses[ 2 ], expenses[ 0 ], expenses[ 1 ] ] );

    const resultHidden = getHiddenExpenses( expenses, filters );
    expect( resultHidden ).toEqual( [] );
} );

test ( 'should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const resultVisible = getVisibleExpenses( expenses, filters );
    expect( resultVisible ).toEqual( [ expenses[ 1 ], expenses[ 2 ], expenses[ 0 ] ] );

    const resultHidden = getHiddenExpenses( expenses, filters );
    expect( resultHidden ).toEqual( [] );
} );
