import React from 'react';
import { shallow } from 'enzyme';
import { PageEdit } from "../../components/page-edit";
import expenses from "../fixtures/expenses";

let editExpense, startRemoveExpense, history, wrapper, editedExpense;

beforeEach( () => {
    editedExpense = expenses[ 2 ];
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow( <PageEdit
        editExpense = { editExpense }
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
    expect( editExpense ).toHaveBeenLastCalledWith( editedExpense.id, editedExpense );
} );

test( 'Should handle remove expense', () => {
    wrapper.find( 'button' ).prop( 'onClick' )();
    expect( history.push ).toHaveBeenLastCalledWith( '/' );
    expect( startRemoveExpense ).toHaveBeenLastCalledWith( { id: editedExpense.id } );
} );
