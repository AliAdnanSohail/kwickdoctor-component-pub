import React from 'react';
import { mount, render  } from 'enzyme';

import { Input, TextArea, Select } from '../src';


describe('Input field', () => {
  it('should be defined', () => {
    expect(Input).toBeDefined();
  });

  it('input renders correctly', () => {
    const input = mount(<Input />);

    expect(input).toMatchSnapshot();
  });


  // it('allows us to change value', () => {
  //   const input = mount(<Input value="Hello I'm test" />);
  //   expect(input.props().value).toEqual("Hello I'm test");
  //   input.simulate('change', { target: { value: 'Hello' } });
  //   expect(input.props().value).toEqual('Hello');
  // });
});


describe('Text area', () => {
  it('should be defined', () => {
    expect(TextArea).toBeDefined();
  });

  it('renders correctly', () => {
    const element = mount(<TextArea />);
    expect(element).toMatchSnapshot();
  });

  // it('allows us to change value', () => {
  //   const element = mount(<TextArea value="Hello I'm test" />);
  //   expect(element.props().value).toEqual("Hello I'm test");
  //   element.simulate('change', { target: { value: 'Hello' } });
  //   expect(element.props().value).toEqual('Hello');
  // });
});


describe('Select', () => {
  it('should be defined', () => {
    expect(Input).toBeDefined();
  });

  it('renders correctly', () => {
    const element =
    mount(<Select >
      <option value="1" >11</option>
      <option value="2" >22</option>
    </Select>);

    expect(element).toMatchSnapshot();
  });

  // it('should change selected value', () => {
  //   const element =
  //   render(<Select >
  //     <option value="1" >11</option>
  //     <option value="2" >22</option>
  //   </Select>);

  //   element.find('select').simulate('change', { target: { value: '100' } });
  //   expect(element.find('select').props().value).toBe('100');
  // });
});

