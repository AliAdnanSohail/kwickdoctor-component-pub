import React, { Fragment } from 'react';

import renderer from './renderer';
import { textInput } from './styles';

export default renderer((input, label, {
  children, className, id, placeholder,
}) => (
  <Fragment>
    <textarea {...input} id={id} placeholder={placeholder} className={className}>
      {children}
    </textarea>

    <style>{textInput}</style>
  </Fragment>
));
