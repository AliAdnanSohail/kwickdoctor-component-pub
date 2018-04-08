import React from 'react';
import { form } from 'react-validation';

export default form(({
  getValues, validate, showError, hideError, children, ...props
}) => (
  <form {...props}>{children}</form>
));
