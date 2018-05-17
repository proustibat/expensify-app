import React from 'react';
import { shallow } from 'enzyme';
import { PageAdd } from "../../components/page-add";
import expenses from '../fixtures/expenses';


let startAddExpense, history, wrapper;

beforeEach( () => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow( <PageAdd startAddExpense = { startAddExpense } history={ history } /> );
} );

test( 'Should render add expense page correctly', () => {
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should handle onSubmit', () => {
    wrapper.find( 'ExpenseForm' ).prop( 'onSubmit' )( expenses[ 1 ] );
    expect( history.push ).toHaveBeenLastCalledWith( '/' );
    expect( startAddExpense ).toHaveBeenLastCalledWith( expenses[ 1 ] );
} );
