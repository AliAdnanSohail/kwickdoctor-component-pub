import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number, withKnobs } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { AvatarPicker } from '../src';
import results from '../.jest-test-results.json';

class AvatarPickerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { src: '' };
  }

  handleChange = (blob) => {
    this.setState({ src: blob ? window.URL.createObjectURL(blob) : '' });
  };

  render() {
    const {
      borderRadius, id, name, size,
    } = this.props;
    const { src } = this.state;

    return (
      <AvatarPicker
        borderRadius={borderRadius}
        id={id}
        name={name}
        src={src}
        size={size}
        onChange={this.handleChange}
      />
    );
  }
}

storiesOf('Avatar Picker', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('AvatarPicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <AvatarPickerWrapper
      borderRadius={number('border-radius', 3)}
      id={text('id', 'avatar')}
      name={text('name', 'name')}
      onChange={action('')}
      size={number('size', 150)}
    />
  ));
