import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
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
    this.setState({ src: window.URL.createObjectURL(blob) });
  }

  render() {
    const { src } = this.state;

    return (
      <AvatarPicker
        id="avatar"
        squared={boolean('squared', false)}
        name={text('name', 'name')}

        src={src}
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
  .add('default', () => <AvatarPickerWrapper />);

