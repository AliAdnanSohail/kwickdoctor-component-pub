import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { SearchBar } from '../src';

const defaultProps = {
  id: 'search-bar',
  onChange: () => undefined,
};

it('renders correctly', () => {
  const element = renderer.create(<SearchBar {...defaultProps} />).toJSON();

  expect(element).toMatchSnapshot();
});

it('calls onChange handler on input', () => {
  const element = mount(<SearchBar {...defaultProps} />);
  const spy = jest.spyOn(defaultProps, 'onChange');

  defaultProps.onChange();
  element.find('#search-bar').simulate('change', { target: { value: 'x' } });
  expect(spy).toHaveBeenCalledTimes(1);
});
