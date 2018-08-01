import classnames from 'classnames';
import React, { Component } from 'react';

import styles, { error as errorStyles, label as labelStyles, textInput } from '../styles';

export default class Input extends Component {
  render() {
    const {
      containerClassName, id, input, label, meta, placeholder, type,
    } = this.props;

    return (
      <div className={classnames('form-field', containerClassName)}>
        <label htmlFor={id}>{label}</label>

        <input
          {...input}
          className={classnames({
            invalid: meta && meta.error && meta.touched,
            active: meta && meta.active,
          })}
          id={id}
          placeholder={placeholder}
          type={type}
        />

        {meta && meta.error && meta.touched && <div className="error">{meta.error}</div>}

        <style jsx>{styles}</style>
        <style jsx>{labelStyles}</style>
        <style jsx>{errorStyles}</style>
        <style>{textInput}</style>
      </div>
    );
  }
}
