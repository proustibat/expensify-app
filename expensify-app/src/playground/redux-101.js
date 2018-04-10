import { createStore } from "redux";


// Action generators
const incrementCount = ( { incrementBy = 1 } = {} ) => ( {
    type: 'INCREMENT',
    incrementBy
} );

const decrementCount = ( { decrementBy = 1 } = {} ) => ( {
    type: 'DECREMENT',
    decrementBy
} );

const setCount = ( { count } ) => ( {
    type: 'SET',
    count
} );

const resetCount = () => ( {
    type: 'RESET'
} );

// Restructuring data
// const add = ( data, c ) => data.a + data.b + c;
// const add = ( { a, b }, c ) => a + b + c;
// console.log( add( { a: 1, b: 12 }, 7 ) );


// Store
const store = createStore( ( state = { count: 0 }, action ) => {
    switch ( action.type ) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
} );


// Subscribe / Unsubscribe
const unsubscribe = store.subscribe( ( ) => {
    console.log( store.getState() );
} );


// Dispatches

store.dispatch( incrementCount( { incrementBy: 5 } ) );

store.dispatch( incrementCount() );

store.dispatch( resetCount() );

store.dispatch( decrementCount() );

store.dispatch( decrementCount( { decrementBy: 10 } ) );

store.dispatch( setCount( { count: 101 } ) );
