import expensesReducers from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test( 'should set up default expenses values', () => {
    const state = expensesReducers( undefined, { type: '@@INIT' } );
    expect( state ).toEqual( [] )
} );


test( 'should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[ 1 ].id
    };
    const state = expensesReducers( expenses, action );
    expect( state ).toEqual( [ expenses[ 0 ], expenses[ 2 ] ] );
} );

test( 'should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducers( expenses, action );
    expect( state ).toEqual( expenses );
} );


test( 'should add an expense', () => {
    const expense = {
        id: '109',
        description: 'hello',
        note: '',
        createdAt: 20000,
        amount: 123
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducers( expenses, action );
    expect( state ).toEqual( [ ...expenses, expense ] );
} );


test( 'should edit expense', () => {
    const amount = 123456;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[ 1 ].id,
        updates: {
            amount
        }
    };
    const state = expensesReducers( expenses, action );
    expect( state[ 1 ].amount ).toBe( amount );
} );

test( 'should not edit expense if id not found', () => {
    const amount = 123456;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducers( expenses, action );
    expect( state ).toEqual( expenses );
} );


test( 'Should set expenses', () => {
    const action = { type: 'SET_EXPENSES', expenses: [ expenses[ 1 ] ] };
    const state = expensesReducers( expenses, action );
    expect( state ).toEqual( [ expenses[ 1 ] ] );
} );
