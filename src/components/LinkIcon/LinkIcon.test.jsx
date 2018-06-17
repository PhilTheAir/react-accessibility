import React from 'react';
import { LinkIcon } from './index';
import { shallow } from 'enzyme';
import { links } from '../../containers/__fixtures__/content';

describe('LinkIcon', () => {
  it('should render', () => {
    const link = links[0];
    const component = <LinkIcon
      key={link.title}
      title={link.title}
      link={link.href}
      icon={link.icon}
    />;
    const wrapper = shallow(component).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
