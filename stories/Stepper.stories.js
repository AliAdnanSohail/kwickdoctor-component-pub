import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Stepper, Step, Button } from '../src';
import results from '../.jest-test-results.json';


function ExampleStepContent(props) {
  return (
    <div>
      <Button title="Next" onClick={() => { props.setActiveStep(props.index + 1); }} />
      <br />
      {`current step ${props.index + 1}`}
    </div>
  );
}

function ExampleStepContent2(props) {
  return (
    <Button title="back" onClick={() => { props.setActiveStep(0); }} />
  );
}


storiesOf('Stepper', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Stepper'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Stepper', () => (
    <Stepper>
      <Step>
        <ExampleStepContent />
      </Step>
      <Step>
        <ExampleStepContent />
      </Step>
      <Step>
        <ExampleStepContent />
      </Step>
      <Step>
        <ExampleStepContent />
      </Step>
      <Step>
        <ExampleStepContent />
      </Step>
      <Step>
        <ExampleStepContent2 />
      </Step>
    </Stepper>
  ));
