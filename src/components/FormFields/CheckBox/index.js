import PropTypes from 'prop-types';
import classnames from 'classnames';
import React from 'react';

import styles from './styles';
import { error as errorStyles } from '../styles';

const CheckBox = ({
  className, id, input, label, meta,
}) => (
  <div className={classnames('checkbox', className)}>
    <label className={classnames('label', input.value && 'checked')} htmlFor={id}>
      {input.value && <i className="material-icons">check</i>}
      {label}
    </label>

    <input {...input} id={id} checked={input.value} type="checkbox" />

    {meta && meta.error && meta.touched && <div className="error">{meta.error}</div>}

    <style jsx>{styles}</style>
    <style jsx>{errorStyles}</style>
  </div>
);

CheckBox.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string.isRequired,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  name: PropTypes.string,
};

CheckBox.defaultProps = {
  className: undefined,
  input: {
    value: false,
  },
  label: undefined,
  meta: {},
  name: undefined,
};

export default CheckBox;
