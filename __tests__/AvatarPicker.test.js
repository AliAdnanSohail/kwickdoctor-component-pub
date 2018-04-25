import React, { Component } from 'react';
import renderer from 'react-test-renderer';

import { AvatarPicker } from '../src';

class AvatarPickerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { src: '' };
  }

  handleChange = (blob) => {
    this.setState({ src: blob ? window.URL.createObjectURL(blob) : '' });
  };

  render() {
    const { id, name, squared } = this.props;
    const { src } = this.state;

    return (
      <AvatarPicker id={id} name={name} squared={squared} src={src} onChange={this.handleChange} />
    );
  }
}

it('renders correctly', () => {
  const element = renderer.create(<AvatarPickerWrapper id="avatar" name="name" />).toJSON();

  expect(element).toMatchSnapshot();
});
