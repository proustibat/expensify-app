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
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp( config );

const database = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    googleProvider,
    database as default
};

//// child_removed event
//database.ref( 'expenses' ).on( 'child_removed', snapshot => {
//    console.log( snapshot.key, snapshot.val() );
//} );
//
//// child_changed event
//database.ref( 'expenses' ).on( 'child_changed', snapshot => {
//    console.log( snapshot.key, snapshot.val() );
//} );
//
//// child_added event
//database.ref( 'expenses' ).on( 'child_added', snapshot => {
//    console.log( snapshot.key, snapshot.val() );
//} );

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

//database.ref( 'expenses' ).push( expenses[0] );
