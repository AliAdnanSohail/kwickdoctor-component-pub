import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StepperHeader from './../StepperHeader';

export default class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: props.activeStep,
    };
  }

  getSteps = () => {
    const { children } = this.props;
    const { activeStep } = this.state;
    const childrenCount = React.Children.count(children);
    return React.Children.map(children, (step, index) => {
      const controlProps = {
        index,
        active: false,
        last: index + 1 === childrenCount,
        setActiveStep: this.setActiveStep,
      };

      if (activeStep === index) {
        controlProps.active = true;
      }

      return React.cloneElement(step, { ...controlProps, ...step.props });
    });
  }

  setActiveStep = (index) => {
    this.setState({
      activeStep: index,
    });
  };

  render() {
    const { activeStep } = this.state;
    const { className, children } = this.props;
    const classes = classnames(
      'stepper',
      className,
    );

    return (
      <div className={classes}>
        <StepperHeader activeStep={activeStep} totalSteps={React.Children.count(children)} />
        <div className="stepper__steps">
          {this.getSteps()}
        </div>
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
