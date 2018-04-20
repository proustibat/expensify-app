import {  startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const createMockStore = configureMockStore( [ thunk ] );

test( 'should set up remove expense action object', () => {
    const action = removeExpense( { id: '123abc' } );
    expect( action ).toEqual( {
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    } )
} );

test( 'should set up edit expense action object', () => {
    const action = editExpense( '123abc', {
        note: 'new note value'
    } );

    expect( action ).toEqual( {
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    } )
} );


test( 'should set up add expense action object with provided values', () => {
    const action = addExpense( expenses[ 2 ] );

    expect( action ).toEqual( {
        type: 'ADD_EXPENSE',
        expense: expenses[ 2 ]
    } )
} );

test( 'Should add expense to database and store', done => {
    const store = createMockStore( {} );
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch( startAddExpense( expenseData ) ).then( () => {
        expect( 1 ).toBe( 1 );
        done();
    } );
} );

test( 'Should add expense with defaults to database and store', () => {

} );

// test( 'should set up add expense action object with default values', () => {
//     const action = addExpense();
//     const defaultValues = {
//         description:'',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     };
//     expect( action ).toEqual( {
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...defaultValues,
//             id: expect.any(String)
//         }
//     } )
// } );
