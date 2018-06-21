import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MaterialIcon from 'material-icons-react';

import styles from './styles';
import { error as errorStyles } from '../styles';

const CheckBox = ({
  input, meta, className, id, name, label,
}) => (
  <div className={classnames('checkbox', className)}>
    <label className={classnames('label', input.value && 'checked')} htmlFor={id}>
      {input.value && <MaterialIcon icon="check" color="#ffffff" size={20} />}
      {label}
    </label>

    <input
      {...input}
      id={id}
      name={name}
      type="checkbox"
      checked={input.value}
    />

    {meta && meta.error && meta.touched && <div className="error">{meta.error}</div>}

    <style jsx>{styles}</style>
    <style jsx>{errorStyles}</style>
  </div>
);

CheckBox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  meta: PropTypes.object,
};

CheckBox.defaultProps = {
  className: undefined,
  input: {
    value: false,
  },
  label: undefined,
  name: undefined,
  meta: {},
};

export default CheckBox;
