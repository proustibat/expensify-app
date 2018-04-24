import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { firebase } from './firebase/firebase';


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

ReactDOM.render( <p>Loading...</p>, document.querySelector( '#app' ) );

firebase.auth().onAuthStateChanged( user => {
    if ( user ) {
        console.log( 'log in' );
        store.dispatch( startSetExpenses() ).then( () => {
            renderApp();
            if ( history.location.pathname === '/' ) {
                history.push( '/dashboard' )
            }
        } );
    }
    else {
        console.log( 'log out' );
        renderApp();
        history.push( '/' );
    }
} );

