import React, { Fragment } from 'react';
import MaterialIcon from 'material-icons-react';

import renderer from '../renderer';
import selectStyles from './styles';
import { textInput } from '../styles';

export default renderer((input, label, {
  className, id, name, options, placeholder,
}) => (
  <Fragment>
    <div className="select-container">
      <select {...input} className={className} id={id} name={name} placeholder={placeholder}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label || option.value}
          </option>
        ))}
      </select>

      <MaterialIcon icon="expand_more" />
    </div>

    <style>{textInput}</style>
    <style jsx>{selectStyles}</style>
  </Fragment>
));
