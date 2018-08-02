import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { RadioButtons } from '../../src';
import results from '../../.jest-test-results.json';

storiesOf('Form Fields', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('RadioButtons'))
  .addDecorator(getStory => <div style={{ padding: '24px', maxWidth: '443px' }}>{getStory()}</div>)
  .add('RadioButtons', () => (
    <RadioButtons
      selected={text('selected', '')}
      options={[
        { value: 'Medical record', icon: <i className="material-icons">done</i> },
        { value: 'Prescription', icon: <i className="material-icons">done</i> },
        { value: 'Lab analysis', icon: <i className="material-icons">done</i> },
        { value: 'Sick list', icon: <i className="material-icons">done</i> },
      ]}
      onChange={(value) => {
        console.log(value);
      }}
    />
  ));
