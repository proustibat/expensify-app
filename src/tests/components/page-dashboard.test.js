import React from 'react';
import { shallow } from 'enzyme';
import PageDashboard from "../../components/page-dashboard";

test( 'should render dashboard page correctly', () => {
    const wrapper = shallow( <PageDashboard /> );
    expect( wrapper ).toMatchSnapshot();
} );
