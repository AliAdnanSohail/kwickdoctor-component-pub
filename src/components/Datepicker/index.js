import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import { calendar, datepicker, label as labelStyles, wrapper } from './styles';

export default class Datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  handleChange = (date) => {
    this.setState({ value: date });
    this.props.onChange(date);
  };

  render() {
    const {
      id, label, name, dateFormat,
    } = this.props;

    return (
      <Fragment>
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

        <style>{calendar}</style>
        <style>{datepicker}</style>
        <style>{labelStyles}</style>
        <style>{wrapper}</style>
      </Fragment>
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
};

Datepicker.defaultProps = {
  name: '',
  label: '',
  value: moment(),
  dateFormat: 'DD MMM, YYYY',
};
