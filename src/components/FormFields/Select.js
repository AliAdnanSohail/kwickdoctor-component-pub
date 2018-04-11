import React, { Fragment } from 'react';

import renderer from './renderer';
import { textInput } from './styles';

export default renderer((input, label, { ...rest }) => (
  <Fragment>
    <select {...input}>{rest.children}</select>

    <style>{textInput}</style>
  </Fragment>
));
