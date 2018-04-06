import React, { Fragment } from 'react';

import renderer from './renderer';
import { textInput } from './styles';

export default renderer((input, label, { children }) => (
  <Fragment>
    <select {...input}>{children}</select>

    <style>{textInput}</style>
  </Fragment>
));
