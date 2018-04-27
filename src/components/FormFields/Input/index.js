import React, { Fragment } from 'react';

import renderer from '../renderer';
import { textInput } from '../styles';

export default renderer((input, label, {
  className, defaultValue, id, name, placeholder, type, value,
}) => (
  <Fragment>
    <input
      {...input}
      className={className}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      defaultValue={defaultValue}
    />

    <style>{textInput}</style>
  </Fragment>
));
