import React, { Fragment } from 'react';
import { control } from 'react-validation';
import classnames from 'classnames';

import { textInput, error as errorStyles } from './styles';

export default control(({
  error, isChanged, isUsed, ...props
}) => (
  <Fragment>
    <input
      {...props}
      className={classnames(props.className, { invalid: isChanged && isUsed && error })}
    />
    {isChanged && isUsed && error && <div className="error">{error}</div>}

    <style>{textInput}</style>
    <style jsx>{errorStyles}</style>
  </Fragment>
));
