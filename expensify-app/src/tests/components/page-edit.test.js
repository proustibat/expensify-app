import React from 'react';
import { shallow } from 'enzyme';
import { PageEdit } from "../../components/page-edit";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper, editedExpense;

beforeEach( () => {
    editedExpense = expenses[ 2 ];
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow( <PageEdit
        startEditExpense = { startEditExpense }
        startRemoveExpense = { startRemoveExpense }
        history = { history }
        expense = { editedExpense }
    /> );
} );

test( 'Should render edit expense page correctly', () => {
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should handle edit expense', () => {
    wrapper.find( 'ExpenseForm' ).prop( 'onSubmit' )( editedExpense );
    expect( history.push ).toHaveBeenLastCalledWith( '/' );
    expect( startEditExpense ).toHaveBeenLastCalledWith( editedExpense.id, editedExpense );
} );

test( 'Should handle remove expense', () => {
    wrapper.find( 'button' ).prop( 'onClick' )();
    expect( history.push ).toHaveBeenLastCalledWith( '/' );
    expect( startRemoveExpense ).toHaveBeenLastCalledWith( { id: editedExpense.id } );
} );
