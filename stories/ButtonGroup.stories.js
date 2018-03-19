import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { ButtonGroup } from '../src';
import results from '../.jest-test-results.json';

const primeButtons = [
  { value: 'male', label: 'male', onChange: () => { console.log('link1'); } },
  { value: 'female', label: 'female', onChange: () => { console.log('link2'); } },
];
const defaultButtons = [
  { value: 'all', label: 'all', onChange: () => { console.log('link1'); } },
  { value: 'mr', label: 'medical records', onChange: () => { console.log('link2'); } },
  { value: 'pr', label: 'prescriptions', onChange: () => { console.log('link3'); } },
  { value: 'la', label: 'lab analysis', onChange: () => { console.log('link4'); } },
  { value: 'sl', label: 'sick list', onChange: () => { console.log('link5'); } },
  { value: 'other', label: 'other', onChange: () => { console.log('link6'); } },
];


storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('ButtonGroup'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('ButtonGroup primary', () => (
    <ButtonGroup primary={boolean('primary', true)} buttons={primeButtons} />
  ))
  .add('ButtonGroup default', () => (
    <ButtonGroup primary={boolean('primary', false)} buttons={defaultButtons} />
  ));
