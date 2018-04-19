import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAozdfq3aCC2f66jG8Sb2QDWtMbV9bUN8Q",
    authDomain: "prstbt-expensify-app.firebaseapp.com",
    databaseURL: "https://prstbt-expensify-app.firebaseio.com",
    projectId: "prstbt-expensify-app",
    storageBucket: "prstbt-expensify-app.appspot.com",
    messagingSenderId: "759437259231"
};

firebase.initializeApp( config );

firebase.database().ref().set( {
    name: 'Jennifer Proust'
} );
