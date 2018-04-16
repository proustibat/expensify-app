import React from 'React';
import { shallow } from 'enzyme';
import ExpenseForm from "../../components/ExpenseForm";
import expenses from '../fixtures/expenses';
import moment from 'moment';

test( 'Should render expense form correctly', () => {
    const wrapper = shallow( <ExpenseForm /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render expense form correctly with expense data', () => {
    const wrapper = shallow( <ExpenseForm expense = { expenses[ 0 ] } /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render error for invalid form submission', () => {
    const wrapper = shallow( <ExpenseForm /> );
    wrapper.find( 'form' ).simulate( 'submit', { preventDefault: () => { } } );
    expect( wrapper.state( 'error' ).length ).toBeGreaterThan( 0 );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should set description on input change', () => {
    const value = 'new description';
    const wrapper = shallow( <ExpenseForm /> );
    wrapper.find( 'input' ).at( 0 ).simulate( 'change', { target: { value } } );
    // wrapper.find( 'input' ).first().simulate( 'change', { target: { value } } );
    // wrapper.find( '.js-description' ).simulate( 'change', { target: { value } } );
    expect( wrapper.state( 'description' ) ).toBe( value );
} );

test( 'Should set note on textarea change', () => {
    const value = 'This is my new note';
    const wrapper = shallow( <ExpenseForm /> );
    // wrapper.find( 'textarea' ).simulate( 'change', { target: { value } } );
    wrapper.find( '.js-note' ).simulate( 'change', { target: { value } } );
    expect( wrapper.state( 'note' ) ).toBe( value );
} );

test( 'Should set amount if valid input', () => {
    const value = '23.50';
    const wrapper = shallow( <ExpenseForm /> );
    wrapper.find( '.js-amount' ).simulate( 'change', { target: { value } } );
    expect( wrapper.state( 'amount' ) ).toBe( value );
} );

test( 'Should not set amount if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow( <ExpenseForm /> );
    wrapper.find( '.js-amount' ).simulate( 'change', { target: { value } } );
    expect( wrapper.state( 'amount' ).length ).toBe( 0 );
} );

test( 'Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow( <ExpenseForm expense={ expenses[ 0 ] } onSubmit={ onSubmitSpy } /> );
    wrapper.find( 'form' ).simulate( 'submit', { preventDefault: () => { } } );
    expect( wrapper.state( 'error' ) ).toBe( '' );
    expect( onSubmitSpy ).toHaveBeenLastCalledWith( {
        description: expenses[ 0 ].description,
        amount: expenses[ 0 ].amount,
        createdAt: expenses[ 0 ].createdAt,
        note: expenses[ 0 ].note
    } );
} );

test( 'Should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow( <ExpenseForm /> );
    wrapper.find( 'SingleDatePicker' ).prop( 'onDateChange' )( now );
    expect( wrapper.state( 'createdAt' ) ).toEqual( now );
} );

test( 'Should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow( <ExpenseForm /> );
    wrapper.find( 'SingleDatePicker' ).prop( 'onFocusChange' )( { focused } );
    expect( wrapper.state( 'calendarFocused' ) ).toBe( focused );
} );
