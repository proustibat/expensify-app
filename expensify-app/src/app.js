import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter, { history } from './routers/AppRouter';

import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { firebase } from './firebase/firebase';
import { login, logout } from "./actions/auth";
import LoadingPage from "./components/LoadingPage";


import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store = { store }>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if ( !hasRendered ) {
        ReactDOM.render( jsx, document.querySelector( '#app' ) );
        hasRendered = true;
    }
};

ReactDOM.render( <LoadingPage />, document.querySelector( '#app' ) );


// When the page first loads or when status changes
// firebase.auth().onAuthStateChanged( user => {
//     if ( user ) {
//         console.log( 'uid', user.uid );
//
//         store.dispatch( login( user.uid ) );
//
//         store.dispatch( startSetExpenses() ).then( () => {
//             renderApp();
//             if ( history.location.pathname === '/' ) {
//                 history.push( '/dashboard' )
//             }
//         } );
//     }
//     else {
//         console.log( 'log out' );
//         store.dispatch( logout() );
//         renderApp();
//         history.push( '/' );
//     }
// } );

