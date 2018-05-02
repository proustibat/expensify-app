import React from 'react';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from "react-test-renderer/shallow";
import { Header } from '../../components/Header';

test( 'should render Header correctly', () => {
    const wrapper = shallow( <Header startLogout={ () => {} } /> );
    expect( wrapper ).toMatchSnapshot();

    // const renderer = new ReactShallowRenderer();
    // renderer.render( <Header /> );
    // expect( wrapper.find( 'h1' ).text() ).toBe( 'Expensify' );

} );

test( 'Should call startLogout on button click', () => {
    const startLogoutSpy = jest.fn();
    const wrapper = shallow( <Header startLogout={ startLogoutSpy } /> );
    wrapper.find( 'button' ).simulate( 'click' );
    expect( startLogoutSpy ).toHaveBeenCalled();
} );
