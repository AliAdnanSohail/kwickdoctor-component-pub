import React, { Component, Fragment } from 'react';
import { mount } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';

import { Button, Stepper, Step } from '../src';

const StepOneContent = props => (
  <Fragment>
    <Button
      onClick={() => {
        props.onChangeActiveStep();
      }}
    >
      Next
    </Button>
    <br />
    Step one
  </Fragment>
);

const StepTwoContent = props => (
  <Fragment>
    <Button
      onClick={() => {
        props.onChangeActiveStep();
      }}
    >
      Next
    </Button>
    <br />
    Step two
  </Fragment>
);

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
    Step one
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
          <StepOneContent onChangeActiveStep={() => this.handleChangeActiveStep(1)} />
        </Step>
        <Step>
          <StepTwoContent onChangeActiveStep={() => this.handleChangeActiveStep(2)} />
        </Step>
        <Step>
          <StepContent onChangeActiveStep={() => this.handleChangeActiveStep(0)} />
        </Step>
      </Stepper>
    );
  }
}

it('renders correctly', () => {
  const element = mount(<StepperWrapper />);

  expect(EnzymeToJson(element)).toMatchSnapshot();
});

it('changing step works correctly', () => {
  const element = mount(<StepperWrapper />);

  expect(element.find('.step').text()).toEqual('NextStep one');

  element.find('.button').simulate('click');

  const timeout = setTimeout(() => {
    expect(element
      .find('.step-icon')
      .first()
      .hasClass('.step-icon--completed')).toEqual(true);

    expect(element
      .find('.step-icon')
      .childAt(1)
      .hasClass('.step-icon--current')).toEqual(true);

    expect(element.find('.step').text()).toEqual('NextStep two');
  }, 300);

  clearTimeout(timeout);
});
