import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { FileInput } from '../src';

it('renders correctly', () => {
  const element = renderer.create(<FileInput id="test">test</FileInput>).toJSON();

  expect(element).toMatchSnapshot();
});

it('Fileinput change correct', () => {
  const wrapper = shallow(<FileInput id="test" />);
  console.log(wrapper.debug());
  wrapper.find('input').simulate('change', {
    target: {
      files: ['someimage.png'],
    },
  });
});
