import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CheckmarkIcon } from 'grommet/components/icons/base';

import styles from './styles';

export default class StepperHeader extends React.Component {
  getIcons = () => {
    const { activeStep, totalSteps } = this.props;
    // eslint-disable-next-line no-plusplus
    return Array.from(new Array(totalSteps), (value, index) => index).map((index) => {
      const key = index.toString();
      const icon = activeStep > index && (<CheckmarkIcon colorIndex="green" />);
      const classes = classnames(
        'step__icon',
        { 'step__icon--status--complete': activeStep > index },
        { 'step__icon--status--current': activeStep === index },
        { 'step__icon--status--next': activeStep < index },
      );
      return (
        <React.Fragment>
          <li key={key} className={classes}>
            <span>
              {icon}
            </span>
          </li>
          <style jsx>{styles}</style>
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <div className="stepper__header">
        <ul>
          {this.getIcons()}
        </ul>
        <style jsx>{styles}</style>
      </div>
    );
  }
}


StepperHeader.propTypes = {
  activeStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};
