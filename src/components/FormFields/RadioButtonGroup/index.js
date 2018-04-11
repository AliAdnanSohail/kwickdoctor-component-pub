import React, { Fragment } from 'react';
import classnames from 'classnames';

import styles, {
  label as labelStyles,
  error as errorStyles,
  radioButton,
  fieldset,
} from '../styles';

export default ({
  input, meta, label, ...rest
}) => (
  <div className={classnames('form-field', rest.containerClassName)}>
    <Fragment>
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
                name={rest.name}
                type="radio"
                value={option.value}
                defaultChecked={rest.selected === option.value}
                onChange={rest.onChange}
              />
            </label>
          );
        })}
      </fieldset>

      <style>{radioButton}</style>
      <style>{fieldset}</style>
    </Fragment>
    {meta && meta.error && meta.touched ? <div className="error">{meta.error}</div> : undefined}

    <style>{styles}</style>
    <style>{labelStyles}</style>
    <style>{errorStyles}</style>
  </div>
);
