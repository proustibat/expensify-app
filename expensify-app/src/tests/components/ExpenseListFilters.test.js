import React from 'react';
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { altFilters, filters } from "../fixtures/filters";


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;


beforeEach( () => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters
            filters = { filters }
            setTextFilter = { setTextFilter }
            sortByDate = { sortByDate }
            sortByAmount = { sortByAmount }
            setStartDate = { setStartDate }
            setEndDate = { setEndDate }
        />
    );
} );

test( 'Should render filters component correctly', () => {
    expect( wrapper ).toMatchSnapshot();
} );

test( 'Should render filters component with alt data correctly', () => {
    wrapper.setProps( {
        filters: altFilters
    } );
    expect( wrapper ).toMatchSnapshot();
} );
