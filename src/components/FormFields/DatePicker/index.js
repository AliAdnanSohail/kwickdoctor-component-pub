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
      id,
      label,
      dateFormat,
      containerClassName,

      meta,
      input: { name },
    } = this.props;

    const { value } = this.state;

    const blockClasses = classnames('form-field', containerClassName, {
      'has-error': !!meta.error,
    });

    return (
      <div className={blockClasses}>
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

        {meta && meta.error && meta.touched ? <div className="error">{meta.error}</div> : undefined}

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
