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
const sortByDate = () => ( {
    type: 'SORT_BY_DATE',
    sortBy: 'date'
} );

// SORT_BY_AMOUNT
const sortByAmount = () => ( {
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
} );

// SET_START_DATE
const setStartDate = startDate  => ( {
    type: 'SET_START_DATE',
    startDate
} );

// SET_END_DATE
const setEndDate = endDate  => ( {
    type: 'SET_END_DATE',
    endDate
} );



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
        case 'SORT_BY_DATE':
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};



// Get visible expenses
const getVisibleExpenses = ( expenses, { text, sortBy, startDate, endDate } ) => {
    return expenses.filter( ( expense ) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textDateMatch = expense.description.toLowerCase().includes( text.toLowerCase() );
        return startDateMatch && endDateMatch && textDateMatch;
    } );
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
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
    console.log( visibleExpenses );
} );



// DISPATCHES
const expenseOne = store.dispatch( addExpense( { description: 'rent', amount: 100, createdAt: 1000 } ) );
const expenseTwo = store.dispatch( addExpense( { description: 'coffea', amount: 300, createdAt: -1000 } ) );
//
// store.dispatch( removeExpense( { id: expenseOne.expense.id } ) );
// store.dispatch( editExpense( expenseTwo.expense.id, { amount: 500 } ) );
//
store.dispatch( setTextFilter( 'ff' ) );
// store.dispatch( setTextFilter( '' ) );
//
// store.dispatch( sortByAmount() ); // filters.sortBy should be amount
// store.dispatch( sortByDate() ); // filters.sortBy should be date

// store.dispatch( setStartDate( 0 ) );
// store.dispatch( setStartDate() );
// store.dispatch( setEndDate( 999 ) );
// store.dispatch( setEndDate() );




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
