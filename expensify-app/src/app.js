import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";

import AppRouter from './routers/AppRouter';
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

ReactDOM.render( <p>Loading...</p>, document.querySelector( '#app' ) );

store.dispatch( startSetExpenses() ).then( () => {
    ReactDOM.render( jsx, document.querySelector( '#app' ) );
} );

firebase.auth().onAuthStateChanged( user => {
    if( user ) {
        console.log('Log in');
    }
    else {
        console.log('Log out');
    }
} );

