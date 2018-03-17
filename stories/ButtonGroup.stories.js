import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { ButtonGroup } from '../src';
import results from '../.jest-test-results.json';

const primeButtons = [
  { id: 'bv1', content: 'male', onClick: () => { console.log('link1'); } },
  { id: 'bv2', content: 'female', onClick: () => { console.log('link2'); } },
];
const defaultButtons = [
  { id: 'bv1', content: 'all', onClick: () => { console.log('link1'); } },
  { id: 'bv2', content: 'medical records', onClick: () => { console.log('link2'); } },
  { id: 'bv2', content: 'prescriptions', onClick: () => { console.log('link3'); } },
  { id: 'bv2', content: 'lab analysis', onClick: () => { console.log('link4'); } },
  { id: 'bv2', content: 'sick list', onClick: () => { console.log('link5'); } },
  { id: 'bv2', content: 'other', onClick: () => { console.log('link6'); } },
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
