import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StepperHeader from '../StepperHeader';

export default class Stepper extends Component {
  static getDerivedStateFromProps(props) {
    return { activeStep: props.activeStep };
  }

  constructor(props) {
    super(props);

    this.state = { activeStep: props.activeStep };
  }

  render() {
    const { activeStep } = this.state;
    const { className, children } = this.props;

    return (
      <div className={className}>
        <StepperHeader active={activeStep} total={React.Children.count(children)} />

        {React.Children.map(children, (step, index) => {
          const controlProps = { index, active: activeStep === index };

          return React.cloneElement(step, { ...step.props, ...controlProps });
        })}
      </div>
    );
  }
}

Stepper.propTypes = {
  activeStep: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Stepper.defaultProps = {
  activeStep: 0,
  className: undefined,
};
