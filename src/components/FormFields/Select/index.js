import classnames from 'classnames';
import React, { Component } from 'react';

import selectStyles from './styles';
import styles, { error as errorStyles, label as labelStyles, textInput } from '../styles';

export default class Input extends Component {
  render() {
    const {
      containerClassName, id, input, label, meta, options, placeholder,
    } = this.props;

    return (
      <div className={classnames('form-field', containerClassName)}>
        <label htmlFor={id}>{label}</label>

        <div className="select-container">
          <select
            {...input}
            className={classnames({
              invalid: meta && meta.error && meta.touched,
              active: meta && meta.active,
            })}
            id={id}
            placeholder={placeholder}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label || option.value}
              </option>
            ))}
          </select>
        </div>

        {meta && meta.error && meta.touched && <div className="error">{meta.error}</div>}

        <style jsx>{styles}</style>
        <style jsx>{labelStyles}</style>
        <style jsx>{errorStyles}</style>
        <style>{textInput}</style>
        <style jsx>{selectStyles}</style>
      </div>
    );
  }
}
