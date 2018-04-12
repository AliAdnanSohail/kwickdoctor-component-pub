import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import { Stepper, Step, Button } from '../src';
import results from '../.jest-test-results.json';

const StepContent = props => (
  <Fragment>
    <Button
      onClick={() => {
        props.onChangeActiveStep();
      }}
    >
      Next
    </Button>
    <br />
    {`current step ${props.index + 1}`}
  </Fragment>
);

class StepperWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { activeStep: 0 };
  }

  handleChangeActiveStep = (index) => {
    this.setState({ activeStep: index });
  };

  render() {
    const { activeStep } = this.state;

    return (
      <Stepper activeStep={activeStep}>
        <Step>
          <StepContent onChangeActiveStep={() => this.handleChangeActiveStep(1)} />
        </Step>
        <Step>
          <StepContent onChangeActiveStep={() => this.handleChangeActiveStep(2)} />
        </Step>
        <Step>
          <StepContent onChangeActiveStep={() => this.handleChangeActiveStep(3)} />
        </Step>
        <Step>
          <StepContent onChangeActiveStep={() => this.handleChangeActiveStep(4)} />
        </Step>
        <Step>
          <StepContent onChangeActiveStep={() => this.handleChangeActiveStep(5)} />
        </Step>
        <Step>
          <StepContent onChangeActiveStep={() => this.handleChangeActiveStep(0)} />
        </Step>
      </Stepper>
    );
  }
}

storiesOf('Stepper', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('Stepper'))
  .addDecorator(getStory => <div style={{ padding: '24px' }}>{getStory()}</div>)
  .add('Stepper', () => <StepperWrapper />);
