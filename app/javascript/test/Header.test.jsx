import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Components/Header';

describe('<Header /> - ', () => {
  it('should shallow render (snapshot)', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});