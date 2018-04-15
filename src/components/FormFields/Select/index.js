import React, { Fragment } from 'react';
import { DownIcon } from 'grommet/components/icons/base';

import renderer from '../renderer';
import selectStyles from './styles';
import { textInput } from '../styles';

export default renderer((input, label, {
  className, id, name, options, placeholder, type, value,
}) => (
  <Fragment>
    <div className="select-container">
      <select
        {...input}
        className={className}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label || option.value}
          </option>
        ))}
      </select>
      <DownIcon />
    </div>

    <style>{textInput}</style>
    <style jsx>{selectStyles}</style>
  </Fragment>
));
