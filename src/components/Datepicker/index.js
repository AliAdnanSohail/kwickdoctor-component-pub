import React from 'react';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.scss';

export default class Datepicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  handleChange = (date) => {
    this.setState({
      value: date,
    });
    this.props.onChange(date);
  }

  render() {
    const {
      id, label, name, dateFormat,
    } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={id} className="datepicker-label">{label}</label>
        <ReactDatePicker
          id={id}
          name={name}
          selected={this.state.value}
          onChange={date => this.handleChange(date)}
          className="datepicker-input"
          calendarClassName="datepicker-calendar"
          dateFormat={dateFormat}
        />
      </React.Fragment>
    );
  }
}

Datepicker.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  dateFormat: PropTypes.string,
};

Datepicker.defaultProps = {
  name: '',
  label: '',
  value: moment(),
  dateFormat: 'DD MMM, YYYY',
};
