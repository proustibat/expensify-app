import { login, logout } from "../../actions/auth";

test( 'Should generate login action object', () => {
    const uid = '123';
    expect( login( uid ) ).toEqual( { type: 'LOGIN', uid } );
} );

test( 'Should generate logout action object', () => {
    expect( logout() ).toEqual( { type: 'LOGOUT' } );
} );

