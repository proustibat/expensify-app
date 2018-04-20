import {  startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from '../../firebase/firebase';

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

test( 'Should add expense to database and store', async() => {
    const store = createMockStore( {} );
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    await store.dispatch( startAddExpense( expenseData ) );

    const actions = store.getActions();

    expect( actions[ 0 ] ).toEqual( {
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any( String ),
            ...expenseData
        }
    } );

    await database.ref( `expenses/${ actions[ 0 ].expense.id }` ).once( 'value' ).then( snapshot => {
        expect( snapshot.val() ).toEqual( expenseData );
    } );

    // store.dispatch( startAddExpense( expenseData ) ).then( () => {
    //     const actions = store.getActions();
    //
    //     expect( actions[ 0 ] ).toEqual( {
    //         type: 'ADD_EXPENSE',
    //         expense: {
    //             id: expect.any( String ),
    //             ...expenseData
    //         }
    //     } );
    //
    //     database.ref( `expenses/${ actions[ 0 ].expense.id }` ).once( 'value' ).then( snapshot => {
    //         expect( snapshot.val() ).toEqual( expenseData );
    //         done();
    //     } );
    // } );
} );

test( 'Should add expense with defaults to database and store', async () => {
    const store = createMockStore( {} );

    const defaultData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    await store.dispatch( startAddExpense( {} ) );

    const actions = store.getActions();

    expect( actions[ 0 ] ).toEqual( {
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any( String ),
            ...defaultData
        }
    } );

    await database.ref( `expenses/${ actions[ 0 ].expense.id }` ).once( 'value' ).then( snapshot => {
        expect( snapshot.val() ).toEqual( defaultData );
    } );

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
