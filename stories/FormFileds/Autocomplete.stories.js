import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, array, boolean, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Autocomplete } from '../../src';
import results from '../../.jest-test-results.json';

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Autocomplete'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Autocomplete', () => (
    <Autocomplete
      id="autocomplete"
      name={text('name', 'Name')}
      label={text('label', 'Label')}
      placeholder={text('placeholder', 'Start typing')}
      suggestions={array('suggestions', [
        'Pseudo',
        'classes',
        'are',
        'bolted',
        'on',
        'to',
        'selectors',
      ])}
      notEditable={boolean('Not editable?', false)}
      defaultValues={array('Default values', ['doctors', 'administrators'])}
    />
  ));
