import React from 'React';
import { shallow } from 'enzyme';
import ExpenseForm from "../../components/ExpenseForm";
import expenses from '../fixtures/expenses';

test( 'Should render expense form correctly', () => {
    const wrapper = shallow( <ExpenseForm /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render expense form correctly with expense data', () => {
    const wrapper = shallow( <ExpenseForm expense = { expenses[ 0 ] } /> );
    expect( wrapper ).toMatchSnapshot();
} );
