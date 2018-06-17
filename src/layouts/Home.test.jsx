import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it('renders the home page structure', () => {
    const component = <Home />;
    const wrapper = shallow(component).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
