import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import { ToolsIcon } from 'grommet/components/icons/base';

import { RadioButtons } from '../src';
import results from '../.jest-test-results.json';


storiesOf('RadioButtons', module)

  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('AvatarPicker'))
  .addDecorator(getStory => (
    <div style={{ padding: '24px', maxWidth: '443px' }}>{getStory()}</div>
  ))
  .add('default', () => (

    <RadioButtons
      selected={text('selected', '')}
      options={[
        { value: 'Medical record', icon: <ToolsIcon /> },
        { value: 'Prescription', icon: <ToolsIcon /> },
        { value: 'Lab analysis', icon: <ToolsIcon /> },
        { value: 'Sick list', icon: <ToolsIcon /> },
      ]}
      onChange={(value) => { console.log(value); }}
    />
  ));
