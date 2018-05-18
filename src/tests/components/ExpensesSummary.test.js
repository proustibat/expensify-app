import React from 'React';
import { shallow } from 'enzyme';
import { ExpensesSummary } from "../../components/ExpensesSummary";


test( 'Should render correctly with only one visible expense', () => {
    const wrapper = shallow( <ExpensesSummary countVisible = { 1 } totalVisible = { 999 } /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render correctly with several visible expenses', () => {
    const wrapper = shallow( <ExpensesSummary countVisible = { 3 } totalVisible = { 999 } /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render correctly with only no visible expense', () => {
    const wrapper = shallow( <ExpensesSummary countVisible = { 0 } totalVisible = { 0 } /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render correctly with no hidden expense', () => {
    const wrapper = shallow( <ExpensesSummary countHidden = { 0 } totalHidden = { 0 } /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render correctly with one hidden expense', () => {
    const wrapper = shallow( <ExpensesSummary countHidden = { 1 } totalHidden = { 10 } /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render correctly with several hidden expenses', () => {
    const wrapper = shallow( <ExpensesSummary countHidden = { 3 } totalHidden = { 999 } /> );
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render correctly several hidden expenses and several visible expenses', () => {
    const wrapper = shallow( <ExpensesSummary
        countVisible = { 15 } totalVisible = { 150 }
        countHidden = { 15 } totalHidden = { 150 }
        countAll = { 30 } totalAll = { 300 } /> );
    expect( wrapper ).toMatchSnapshot();
} );

