import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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


test( 'should set up add expense action object', () => {
    const expenseData = {
        description: 'Rent',
        note: 'This was last month rent',
        amount: 109500,
        createdAt: 1000
    };
    const action = addExpense( expenseData );

    expect( action ).toEqual( {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    } )
} );

test( 'should set up add expense action object with default values', () => {
    const action = addExpense();
    const defaultValues = {
        description:'',
        note: '',
        amount: 0,
        createdAt: 0
    };
    expect( action ).toEqual( {
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultValues,
            id: expect.any(String)
        }
    } )
} );
