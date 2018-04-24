import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header'

export const PrivateRoute = ( { isAuthenticated, component: Component, ...rest } ) => (
    <Route
        component={ ( props ) => (
            isAuthenticated ? (
                <div>
                    <Header />
                    <Component { ...props } />
                </div>
            ) : (
                <Redirect to = "/" />
            )
        )}
        { ...rest }
    />
);


const mapStateToProps = ( state ) => ( {
    isAuthenticated: !!state.auth.uid
} );

export default connect( mapStateToProps )( PrivateRoute );
