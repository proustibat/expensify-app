import * as firebase from 'firebase';
import moment from "moment/moment";

const expenses = [ {
    description: 'Gum',
    note: 'Note for the gum',
    amount: 195,
    createdAt: 0
}, {
    description: 'Rent',
    note: 'Bla bli blou',
    amount: 109500,
    createdAt: moment( 0 ).subtract( 4, 'days' ).valueOf()
}, {
    description: 'Credit Card',
    note: 'Youpi yep',
    amount: 4500,
    createdAt: moment( 0 ).add( 4, 'days' ).valueOf()
} ];


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

const database = firebase.database();

// child_removed event
database.ref( 'expenses' ).on( 'child_removed', snapshot => {
    console.log( snapshot.key, snapshot.val() );
} );

// child_changed event
database.ref( 'expenses' ).on( 'child_changed', snapshot => {
    console.log( snapshot.key, snapshot.val() );
} );

// child_added event
database.ref( 'expenses' ).on( 'child_added', snapshot => {
    console.log( snapshot.key, snapshot.val() );
} );

//database.ref( 'expenses' )
//    .once( 'value' )
//    .then( snapshot => {
//        //console.log( snapshot.val() );
//        const expenses = [];
//        snapshot.forEach( child => {
//            expenses.push( {
//                id: child.key,
//                ...child.val()
//            } );
//        } );
//        console.log( expenses );
//    } );

//database.ref( 'expenses' )
//    .on( 'value', snapshot => {
//        const expenses = [];
//        snapshot.forEach( child => {
//            expenses.push( {
//                id: child.key,
//                ...child.val()
//            } );
//        } );
//        console.log( expenses );
//    } );

//expenses.forEach( expense => {
//    database.ref( 'expenses' ).push( expense );
//} );

database.ref( 'expenses' ).push( expenses[0] );
