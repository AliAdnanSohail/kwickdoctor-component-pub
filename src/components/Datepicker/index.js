import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import classnames from 'classnames';

import 'react-datepicker/dist/react-datepicker.css';
import { calendar, datepicker, label as labelStyles, wrapper, error as errorStyles, datepickerBlock as datepickerBlockStyles } from './styles';

export default class Datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  errorMessage = () => {
    const { error } = this.props;

    return (
      error && (
        <div className="input-error">
          {error}
        </div>
      )
    );
  };

  handleChange = (date) => {
    this.setState({ value: date });
    this.props.onChange(date);
  };

  render() {
    const {
      id, label, name, dateFormat, error,
    } = this.props;
    const blockClasses = classnames('datepicker-block', { 'has-error': !!error });

    return (
      <div className={blockClasses}>
        <label htmlFor={id}>{label}</label>

        <ReactDatePicker
          id={id}
          name={name}
          selected={this.state.value}
          onChange={date => this.handleChange(date)}
          className="datepicker"
          calendarClassName="calendar"
          dateFormat={dateFormat}
          useWeekdaysShort
        />
        {this.errorMessage()}

        <style>{datepickerBlockStyles}</style>
        <style>{calendar}</style>
        <style>{datepicker}</style>
        <style>{labelStyles}</style>
        <style>{wrapper}</style>
        <style>{errorStyles}</style>
      </div>
    );
  }
}

Datepicker.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.object,
  dateFormat: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Datepicker.defaultProps = {
  name: '',
  label: '',
  value: moment(),
  dateFormat: 'DD MMM, YYYY',
  error: '',
};
