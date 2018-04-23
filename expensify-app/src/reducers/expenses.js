const expensesReducerDefaultState = [];
export default ( state = expensesReducerDefaultState, action ) => {
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

        case 'SET_EXPENSES':
            return action.expenses;

        default:
            return state;
    }
};
