import React from 'React';
import { shallow } from 'enzyme';
import { ExpensesSummary } from "../../components/ExpensesSummary";

test( 'Should render correctly with only one expenses', () => {
    const wrapper = shallow( <ExpensesSummary count = { 1 } total = { 999 } /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render correctly with several expenses', () => {
    const wrapper = shallow( <ExpensesSummary count = { 3 } total = { 999 } /> );
    expect( wrapper ).toMatchSnapshot();
} );
