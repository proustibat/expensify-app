import React from 'react';
import { shallow } from 'enzyme';
import Page404 from "../../components/page-404";

test( 'should render 404 page correctly', () => {
    const wrapper = shallow( <Page404 /> );
    expect( wrapper ).toMatchSnapshot();
} );
