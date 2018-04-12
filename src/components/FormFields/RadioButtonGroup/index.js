import React from 'react';
import classnames from 'classnames';

import radioButtonStyles from './styles';
import styles, { label as labelStyles, error as errorStyles, fieldset } from '../styles';

export default ({
  input, meta, label, ...rest
}) => (
  <div className={classnames('form-field', rest.containerClassName)}>
    <fieldset>
      <legend>{label}</legend>

      {rest.options.map((option) => {
        const classes = classnames('radio-button', {
          'radio-button--active': rest.selected === option.value,
        });

        return (
          <label key={option.value} className={classes}>
            {option.label || option.value}
            <input
              {...input}
              className={rest.className}
              defaultChecked={rest.selected === option.value}
              name={rest.name}
              type="radio"
              value={option.value}
            />
          </label>
        );
      })}
    </fieldset>

    {meta && meta.error && meta.touched ? <div className="error">{meta.error}</div> : undefined}

    <style jsx>{styles}</style>
    <style jsx>{labelStyles}</style>
    <style jsx>{errorStyles}</style>
    <style jsx>{fieldset}</style>
    <style jsx>{radioButtonStyles}</style>
  </div>
);
