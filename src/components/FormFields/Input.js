import React, { Fragment } from 'react';

import renderer from './renderer';
import { textInput } from './styles';

export default renderer((input, label, { id, placeholder, className }) => (
  <Fragment>
    <input {...input} id={id} placeholder={placeholder} className={className} />

    <style>{textInput}</style>
  </Fragment>
));
