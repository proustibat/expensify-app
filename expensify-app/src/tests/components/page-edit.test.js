import React from 'react';
import { shallow } from 'enzyme';
import { PageEdit } from "../../components/page-edit";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, wrapper, editedExpense;

beforeEach( () => {
    editedExpense = expenses[ 2 ];
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow( <PageEdit
        editExpense = { editExpense }
        removeExpense = { removeExpense }
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
    expect( editExpense ).toHaveBeenLastCalledWith( editedExpense.id, editedExpense );
} );

test( 'Should handle remove expense', () => {
    wrapper.find( 'button' ).prop( 'onClick' )();
    expect( history.push ).toHaveBeenLastCalledWith( '/' );
    expect( removeExpense ).toHaveBeenLastCalledWith( { id: editedExpense.id } );
} );
