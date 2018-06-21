import React, { Component } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
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

    this.state = { value: moment(props.input.value) };
  }

  handleChange = (date) => {
    const value = moment(date.target ? date.target.value : date, this.props.dateFormat, true);

    if (moment.isMoment(value) && value.isValid()) {
      this.setState({ value });

      this.props.input.onChange(value);
    }
  };

  render() {
    const {
      containerClassName,
      dateFormat,
      id,
      input: { name },
      label,
      meta,
    } = this.props;

    const { value } = this.state;

    const classes = classnames('form-field', containerClassName, {
      'has-error': !!meta.error,
    });

    return (
      <div className={classes}>
        <label htmlFor={id}>{label}</label>

        <ReactDatePicker
          calendarClassName="calendar"
          className="datepicker"
          dateFormat={dateFormat}
          id={id}
          name={name}
          onChange={this.handleChange}
          onChangeRaw={this.handleChange}
          selected={value}
          useWeekdaysShort
        />

        {meta && meta.error && meta.touched && <div className="error">{meta.error}</div>}

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
  containerClassName: PropTypes.string,
  dateFormat: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
};

DatePicker.defaultProps = {
  containerClassName: undefined,
  dateFormat: 'DD MMM, YYYY',
  input: {
    value: moment(),
  },
  label: undefined,
  meta: {},
};
