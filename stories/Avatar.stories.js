import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Avatar } from '../src';
import results from '../.jest-test-results.json';

class AvatarWrapper extends Component {
  render() {
    const { src, squared } = this.props;
    return (
      <Avatar src={src} squared={squared} />
    );
  }
}

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Avatar'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <AvatarWrapper
      squared={boolean('squared', false)}
    />
  ));
