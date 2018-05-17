import { firebase, googleProvider } from "../firebase/firebase";

export const login = ( uid ) => {
    return {
        type: 'LOGIN',
        uid
    };
};

export const logout = () => ( {
    type: 'LOGOUT'
} );

export const startLogin = () => () => firebase.auth().signInWithPopup( googleProvider );

export const startLogout = () => () => firebase.auth().signOut();
