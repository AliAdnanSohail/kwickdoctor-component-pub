import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';

import starPickerStyles from './styles';
import { fieldset as fieldsetStyles, label as labelStyles } from '../styles';

export default class StarPicker extends Component {
  render() {
    const {
      containerClassName, input, label, max,
    } = this.props;

    return (
      <div className={containerClassName}>
        <fieldset className="fieldset">
          <legend>{label}</legend>

          <div className="stars">
            {Array.from(new Array(max), (value, index) => index).map((item) => {
              const value = item + 1;

              return (
                <label className="star" key={item} htmlFor={`${input.name}-${value}`}>
                  <input {...input} id={`${input.name}-${value}`} type="radio" value={value} />
                  {value <= input.value ? (
                    <MaterialIcon color="#45cf7a" icon="star" size={36} />
                  ) : (
                    <MaterialIcon color="#babbd0" icon="star_outline" size={36} />
                  )}
                </label>
              );
            })}
          </div>

          <style jsx>{starPickerStyles}</style>
          <style jsx>{fieldsetStyles}</style>
          <style jsx>{labelStyles}</style>
        </fieldset>
      </div>
    );
  }
}

StarPicker.propTypes = {
  containerClassName: PropTypes.string,
  label: PropTypes.string,
  max: PropTypes.number.isRequired,
};

StarPicker.defaultProps = {
  containerClassName: '',
  label: '',
};
