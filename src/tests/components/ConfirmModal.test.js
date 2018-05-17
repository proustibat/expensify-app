import React from "react";
import Modal from 'react-modal';
import { shallow } from "enzyme";
import ConfirmModal from "../../components/ConfirmModal";


let handleCloseModal, handleConfirm, body, wrapper, confirmText, cancelText;

beforeEach( () => {
    handleCloseModal = jest.fn();
    handleConfirm = jest.fn();
    body = 'my tst body';
    confirmText = 'confirm text';
    cancelText =  'cancel text';
    wrapper = shallow( <ConfirmModal
        showModal = { true }
        handleCloseModal = { handleCloseModal }
        handleConfirm = { handleConfirm }
        body = { body }
        confirmText={ confirmText }
        cancelText={ cancelText }
    /> );
} );

test( 'Should render the confirm modal correctly', () => {
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render a react modal', () => {
    expect( wrapper.find( Modal ).length ).toEqual( 1 );
} );

test( 'Should opens modal', () => {
    expect( wrapper.find( Modal ).prop( 'isOpen' ) ).toEqual( true );
} );

test( 'Should handle handleConfirm method when confirming action', () => {
    wrapper.find( '.button--valid' ).simulate( 'click' );
    expect( handleConfirm ).toHaveBeenCalled();
} );

test( 'Should handle handleCloseModal method when canceling action', () => {
    wrapper.find( '.button--cancel' ).simulate( 'click' );
    expect( handleCloseModal ).toHaveBeenCalled();
} );
