import React, { Fragment } from 'react';
import NextIcon from 'grommet/components/icons/base/Next';

import renderer from './renderer';
import { select } from './styles';


// добавить иконку
// написать код, тесты
// сторибук
export default renderer((
  input, id,
  {
    children, className, placeholder, value, ...rest
  },
) => (
  <Fragment>
    <div className="select-container">
      <select
        {...input}
        placeholder={placeholder}
        value={value}
      >
        <option value="" disabled selected hidden>{placeholder}</option>
        {
          children.map(item =>
            item)
        }
      </select>
      <NextIcon className="icon" />
    </div>

    <style>{select}</style>
  </Fragment>
));

