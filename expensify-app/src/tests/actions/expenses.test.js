import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense
} from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from '../../firebase/firebase';

const createMockStore = configureMockStore( [ thunk ] );

beforeEach( async () => {
    const expensesData = {};
    expenses.forEach( ( { id, description, note, amount, createdAt } ) => {
        expensesData[ id ] = { description, note, amount, createdAt }
    } );

    await database.ref( 'expenses' ).set( expensesData );
} );

test( 'Should set up remove expense action object', () => {
    const action = removeExpense( { id: '123abc' } );
    expect( action ).toEqual( {
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    } )
} );

test( 'Should remove expense from firebase', async() => {
    const store = createMockStore( {} );
    const id = expenses[ 2 ].id;
    await store.dispatch( startRemoveExpense( { id } ) );
    const actions = store.getActions();
    expect( actions[ 0 ] ).toEqual( {
        type: 'REMOVE_EXPENSE',
        id
    } );

    return database.ref( `expenses/${ id }` ).once( 'value' ).then( snapshot => {
        expect( snapshot.val() ).toBeFalsy();
    } );
} );

test( 'Should set up edit expense action object', () => {
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


test( 'Should set up add expense action object with provided values', () => {
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


test( 'Should setup set expense action object with data', () => {
    const action = setExpenses( expenses );
    expect( action ).toEqual( {
        type: 'SET_EXPENSES',
        expenses
    })
} );

test( 'Should fetch the expenses from firebase', async () => {
    const store = createMockStore( {} );

    await store.dispatch( startSetExpenses() );

    const actions = store.getActions();

    expect( actions[ 0 ] ).toEqual( {
        type: 'SET_EXPENSES',
        expenses
    } );

} );
