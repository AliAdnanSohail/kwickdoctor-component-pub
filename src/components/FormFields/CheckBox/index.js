import React, { Fragment } from 'react';

import renderer from '../renderer';
import { textInput } from '../styles';

export default renderer((input, label, {
  className, id, name, defaultChecked,
}) => (
  <Fragment>
    <input
      {...input}
      className={className}
      id={id}
      name={name}
      type="checkbox"
      defaultChecked={defaultChecked}
    />

    <style>{textInput}</style>
  </Fragment>
));
