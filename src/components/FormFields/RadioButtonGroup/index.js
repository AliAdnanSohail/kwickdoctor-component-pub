import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import radioButtonStyles from './styles';
import styles, { label as labelStyles, error as errorStyles, fieldset } from '../styles';

export default class RadioButtonGroup extends Component {
  render() {
    const {
      containerClassName, className, id, input, label, meta, options,
    } = this.props;

    return (
      <div className={classnames('form-field', containerClassName)}>
        <fieldset className="fieldset">
          <legend className="legend">{label}</legend>

          <div className="radio-buttons">
            {options.map((option) => {
              const classes = classnames('radio-button', {
                'radio-button--active': input.value === option.value,
              });

              const optionId = `${id}-${option.value}`;

              return (
                <label className={classes} htmlFor={optionId} key={option.value}>
                  {option.label || option.value}

                  <input
                    {...input}
                    className={className}
                    id={optionId}
                    type="radio"
                    value={option.value}
                  />
                </label>
              );
            })}
          </div>
        </fieldset>

        {meta && meta.error && meta.touched ? <div className="error">{meta.error}</div> : undefined}

        <style jsx>{styles}</style>
        <style jsx>{labelStyles}</style>
        <style jsx>{errorStyles}</style>
        <style jsx>{fieldset}</style>
        <style jsx>{radioButtonStyles}</style>
      </div>
    );
  }
}

RadioButtonGroup.propTypes = {
  containerClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string.isRequired,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  options: PropTypes.array.isRequired,
};

RadioButtonGroup.defaultProps = {
  containerClassName: '',
  className: '',
  input: { value: '' },
  label: '',
  meta: {},
};
