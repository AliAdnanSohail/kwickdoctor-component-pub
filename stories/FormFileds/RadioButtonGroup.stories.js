import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { RadioButtonGroup } from '../../src';
import results from '../../.jest-test-results.json';

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('RadioButtonGroup'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('RadioButtonGroup', () => (
    <RadioButtonGroup
      name={text('name', 'Gender')}
      selected={text('selected', 'male')}
      options={[{ value: 'male' }, { value: 'any' }, { value: 'female' }]}
      label={text('label', 'Label')}
    />
  ));
