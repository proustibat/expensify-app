import { createStore, combineReducers } from "redux";
import uuid from "uuid";


// ACTIONS

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {} ) => ( {
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
} );

// REMOVE_EXPENSE
const removeExpense = ( { id } = {} ) => ( {
    type: 'REMOVE_EXPENSE',
    id
} );

// EDIT_EXPENSE
const editExpense = ( id, updates ) => ( {
    type: 'EDIT_EXPENSE',
    id,
    updates
} );

// SET_TEXT_FILTER
const setTextFilter = ( text = '' ) => ( {
    type: 'SET_TEXT_FILTER',
    text
} );

// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
    switch ( action.type ) {
        case 'ADD_EXPENSE':
            return [ ...state, action.expense ];
        case 'REMOVE_EXPENSE':
            return state.filter( ( { id } ) => action.id !== id );
        case 'EDIT_EXPENSE':
            return state.map( ( item ) => {
                if( item.id === action.id ) {
                    return {
                        ...item,
                        ...action.updates
                    }
                } else {
                    return item;
                }
            } );

        default:
            return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = ( state = filtersReducerDefaultState, action ) => {
    switch ( action.type ) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};


// STORE
const store = createStore(
    combineReducers( {
        expenses: expensesReducer,
        filters: filtersReducer
    } )
);

// Subscribe / Unsubscribe
const unsubscribe = store.subscribe( ( ) => {
    console.log( store.getState() );
} );



// DISPATCHES
const expenseOne = store.dispatch( addExpense( { description: 'rent', amount: 100 } ) );
const expenseTwo = store.dispatch( addExpense( { description: 'coffea', amount: 300 } ) );

store.dispatch( removeExpense( { id: expenseOne.expense.id } ) );
store.dispatch( editExpense( expenseTwo.expense.id, { amount: 500 } ) );

store.dispatch( setTextFilter( 'rent' ) );
store.dispatch( setTextFilter( '' ) );


const demoState = {
    expenses: [ {
        id: 'dsfdsfdsfs',
        description: 'January Rent',
        note: 'This was the final payment for the adress',
        amount: 54500,
        createdAt: 0
    } ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
