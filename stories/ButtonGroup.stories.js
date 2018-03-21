import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { ButtonGroup } from '../src';
import results from '../.jest-test-results.json';

const primeButtons = [
  { value: 'male', label: 'male' },
  { value: 'female', label: 'female' },
];
const defaultButtons = [
  { value: 'all', label: 'all' },
  { value: 'mr', label: 'medical records' },
  { value: 'pr', label: 'prescriptions' },
  { value: 'la', label: 'lab analysis' },
  { value: 'sl', label: 'sick list' },
  { value: 'other', label: 'other' },
];


storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('ButtonGroup'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('RadioButtonGroup primary+label', () => (
    <ButtonGroup onChange={action('OnChange')} primary={boolean('primary', true)} buttons={primeButtons} groupLabel="Gender" />
  ))
  .add('RadioButtonGroup default no label', () => (
    <ButtonGroup onChange={action('OnChange')} primary={boolean('primary', false)} buttons={defaultButtons} />
  ));
