import React from 'react';
import { shallow } from 'enzyme';
import { PageEdit } from "../../components/page-edit";
import expenses from "../fixtures/expenses";
import ConfirmModal from "../../components/ConfirmModal";

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

test( 'Should open a modal to confirm when clicking on save then handle edit expense when confirming', () => {
    const editModalParams = {
        modalBody: 'Do you wanna save your changes?',
        isModalOpen: true
    };

    wrapper.find( 'ExpenseForm' ).simulate( 'submit', editedExpense );
    expect( wrapper.state() ).toMatchObject( editModalParams );

    wrapper.update();

    // ConfirmModal should be open
    expect( wrapper.find( ConfirmModal ).prop( 'showModal' ) ).toBeTruthy();

    // Call confirm action method (as if user clicks yes)
    wrapper.find( ConfirmModal ).prop( 'handleConfirm' )();
    expect( history.push ).toHaveBeenLastCalledWith( '/' );
    expect( startEditExpense ).toHaveBeenLastCalledWith( editedExpense.id, editedExpense );
} );

test( 'Should open a modal to confirm when clicking on delete then handle remove expense when confirming', () => {
    wrapper.find( 'button' ).simulate( 'click', { nativeEvent: true } );
    const removeModalParams = {
        modalBody: 'Are you sure you wanna delete this expense?',
        modalConfirmText: 'Of course!',
        modalCancelText: 'Wait! No!',
        isModalOpen: true
    };
    expect( wrapper.state() ).toMatchObject( removeModalParams );
    wrapper.update();

    // ConfirmModal should be open
    expect( wrapper.find( ConfirmModal ).prop( 'showModal' ) ).toBeTruthy();
    // Call confirm action method (as if user clicks yes)
    wrapper.find( ConfirmModal ).prop( 'handleConfirm' )();

    expect( history.push ).toHaveBeenLastCalledWith( '/' );
    expect( startRemoveExpense ).toHaveBeenLastCalledWith( { id: editedExpense.id } );
} );

