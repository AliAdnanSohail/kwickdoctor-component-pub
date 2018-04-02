import React, { Fragment } from 'react';
import { control } from 'react-validation';
import classnames from 'classnames';

import { error as errorStyles, textInput } from './styles';

export default control(({
  error, isChanged, isUsed, ...props
}) => (
  <Fragment>
    <textarea
      {...props}
      className={classnames(props.className, { invalid: isChanged && isUsed && error })}
    />
    {isChanged && isUsed && error && <div className="input-error">{error}</div>}

    <style>{textInput}</style>
    <style jsx>{errorStyles}</style>
  </Fragment>
));
