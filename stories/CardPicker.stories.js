import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withTests } from '@storybook/addon-jest';
import { action } from '@storybook/addon-actions';

import { CardPicker } from '../src';
import results from '../.jest-test-results.json';

const defaultCards = [
  { value: 'male', content: 'Male', img: 'http://via.placeholder.com/240x240' },
  { value: 'any', content: 'Any', img: 'http://via.placeholder.com/240x240' },
  { value: 'female', content: 'Female', img: 'http://via.placeholder.com/240x240' },
];

storiesOf('Card Picker', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('CardPicker'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <CardPicker
      cards={defaultCards}
      selected={defaultCards[0].value}
      onSelect={action('clicked')}
    />
  ));
