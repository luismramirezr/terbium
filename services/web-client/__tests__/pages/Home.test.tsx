import React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Home from '~/pages/Home';

describe('pages/Home', () => {
  const setupComponent = () => <Home />;

  it('renders', () => {
    const component = renderer.create(setupComponent());
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('has login inputs', () => {
    const component = mount(setupComponent());
    expect(component.find('TextField')).toExist();
    expect(component.find('PasswordField')).toExist();
    expect(component.find('Button').at(0).text()).toContain('Log In');
    expect(component.find('Button').at(1).text()).toContain('Forgot Password?');
  });
});
