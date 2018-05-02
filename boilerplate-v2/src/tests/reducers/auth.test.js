import authReducer from '../../reducers/auth';

test( 'Should set up user uid on logout', () => {
    const action = { type: 'LOGIN', uid: '123' };
    const state = authReducer( {}, action );
    expect( state.uid ).toBe( action.uid );
} );

test( 'Should clear user id on logout', () => {
    const action = { type: 'LOGOUT' };
    const state = authReducer( { uid: '123' }, action );
    expect( state ).toEqual( {} );
} );
