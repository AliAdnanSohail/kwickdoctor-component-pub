import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import classnames from 'classnames';
import uuidv4 from 'uuid/v4';

import 'react-datepicker/dist/react-datepicker.css';
import {
  calendar,
  datepicker,
  label as labelStyles,
  wrapper,
  error as errorStyles,
  datepickerBlock as datepickerBlockStyles,
} from './styles';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.id = uuidv4();
    this.state = {
      value: moment(props.input.value),
    };
  }

  errorMessage = error => error && <div className="input-error">{error}</div>;

  handleChange = (dateOrDateString) => {
    let date = dateOrDateString;
    if (date.target && typeof date.target.value === 'string') {
      date = moment(date.target.value, this.props.dateFormat, true);
    }

    this.setState({ value: date });
    this.props.input.onChange(date);
  };

  render() {
    const {
      id, label, dateFormat, containerClassName,
    } = this.props;
    const { input: { name } } = this.props;
    const { meta: { error } } = this.props;

    const blockClasses = classnames('form-field', containerClassName, {
      'has-error': !!error,
    });

    return (
      <div className={blockClasses}>
        <label htmlFor={id}>
          {label}
        </label>

        <ReactDatePicker
          id={id}
          name={name}
          selected={this.state.value}
          onChange={this.handleChange}
          onChangeRaw={this.handleChange}
          className="datepicker"
          calendarClassName="calendar"
          dateFormat={dateFormat}
          useWeekdaysShort
        />
        {this.errorMessage(error)}

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

DatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object,
  dateFormat: PropTypes.string,
  containerClassName: PropTypes.string,
};

DatePicker.defaultProps = {
  input: {
    value: moment(),
  },
  meta: {},
  label: undefined,
  dateFormat: 'DD MMM, YYYY',
  containerClassName: undefined,
};
