import React, { Fragment } from 'react';

import renderer from '../renderer';
import { textInput } from '../styles';

export default renderer((input, label, {
  children, className, id, name, placeholder, row,
}) => (
  <Fragment>
    <textarea
      {...input}
      className={className}
      id={id}
      name={name}
      placeholder={placeholder}
      row={row}
    >
      {children}
    </textarea>

    <style>{textInput}</style>
  </Fragment>
));
