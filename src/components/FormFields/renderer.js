import React from 'react';
import classnames from 'classnames';

import styles, { error as errorStyles, label as labelStyles } from './styles';

export default render => ({
  input, meta, label, ...rest
}) => (
  <div className={classnames('form-field', rest.containerClassName)}>
    <label htmlFor={rest.id}>{label}</label>
    {render(input, label, {
      ...rest,
      className: classnames({
        invalid: meta && meta.error && meta.touched,
        active: meta && meta.active,
      }),
    })}
    {meta && meta.error && meta.touched ? <div className="error">{meta.error}</div> : undefined}

    <style jsx>{styles}</style>
    <style jsx>{labelStyles}</style>
    <style jsx>{errorStyles}</style>
  </div>
);
