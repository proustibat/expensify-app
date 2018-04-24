import { firebase, googleProvider } from "../firebase/firebase";

export const startLogin = () => () => firebase.auth().signInWithPopup( googleProvider );

export const startLogout = () => () => firebase.auth().signOut();
