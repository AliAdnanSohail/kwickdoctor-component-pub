import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { ButtonGroup } from '../src';
import results from '../.jest-test-results.json';

const primeButtons = [{ value: 'male', label: 'male' }, { value: 'female', label: 'female' }];

storiesOf('Radio Button Group', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('ButtonGroup'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('default', () => (
    <ButtonGroup
      onChange={action('onChange')}
      primary={boolean('primary', true)}
      buttons={primeButtons}
      groupLabel="Gender"
    />
  ));
