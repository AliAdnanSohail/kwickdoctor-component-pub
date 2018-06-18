import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MaterialIcon from 'material-icons-react';

import { stepHeader, stepIcon } from './styles';

export default class StepperHeader extends Component {
  renderIcons = () => {
    const { active, total } = this.props;

    return [...Array(total).keys()].map((index) => {
      const completed = active > index;

      const classes = classnames(
        'step-icon',
        { 'step-icon--completed': completed },
        { 'step-icon--current': active === index },
        { 'step-icon--last': index === total - 1 },
        { 'step-icon--next': active < index },
      );

      return (
        <li key={index} className={classes}>
          <span>{completed ? <MaterialIcon color="#6fcb83" icon="done" /> : undefined}</span>

          <style jsx>{stepIcon}</style>
        </li>
      );
    });
  };

  render() {
    return (
      <ul className="stepper-header">
        {this.renderIcons()}

        <style jsx>{stepHeader}</style>
      </ul>
    );
  }
}

StepperHeader.propTypes = {
  active: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
