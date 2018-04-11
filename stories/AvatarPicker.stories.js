import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { AvatarPicker } from '../src';
import results from '../.jest-test-results.json';

storiesOf('Avatar Picker', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('AvatarPicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <AvatarPicker id="avatar" name={text('name', 'name')} onChange={action('onChange')} />
  ));

storiesOf('Avatar Picker', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('AvatarPicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('big', () => (
    <AvatarPicker id="avatar" size="big" name={text('name', 'name')} onChange={action('onChange')} />
  ));
