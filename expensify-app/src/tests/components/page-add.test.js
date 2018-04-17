import React from 'react';
import { shallow } from 'enzyme';
import { PageAdd } from "../../components/page-add";
import expenses from '../fixtures/expenses';


let addExpense, history, wrapper;

beforeEach( () => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow( <PageAdd addExpense = { addExpense } history={ history } /> );
} );

test( 'Should render add expense page correctly', () => {
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should handle onSubmit', () => {
    wrapper.find( 'ExpenseForm' ).prop( 'onSubmit' )( expenses[ 1 ] );
    expect( history.push ).toHaveBeenLastCalledWith( '/' );
    expect( addExpense ).toHaveBeenLastCalledWith( expenses[ 1 ] );
} );
