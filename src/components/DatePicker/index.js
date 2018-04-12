import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import classnames from 'classnames';
import uuidv4 from 'uuid/v4';
import shallowEqualArrays from 'shallow-equal/arrays';
import shallowEqualObjects from 'shallow-equal/objects';

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
      value: moment(props.value),
    };
  }

  componentDidMount() {
    this.context._register(this, this.id);
  }

  componentWillReceiveProps({ validations: nextValidations, ...nextProps }) {
    const { validations, ...props } = this.props;

    if (
      !shallowEqualObjects(props, nextProps) ||
      !shallowEqualArrays(validations, nextValidations)
    ) {
      this.context._setProps(nextProps, this.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextContext !== this.context;
  }

  componentWillUnmount() {
    this.context._unregister(this, this.id);
  }

  getError = () => {
    const props = this.context._getProps(this.id);
    if (!props) {
      return null;
    }
    return props.error;
  }

  errorMessage = error => error && <div className="input-error">{error}</div>;

  handleChange = (dateOrDateString) => {
    let date = dateOrDateString;
    if (date.target && typeof date.target.value === 'string') {
      date = moment(date.target.value, this.props.dateFormat, true);
    }

    this.context._handleChange({ target: { value: date } }, this.id);

    this.setState({ value: date });
    this.props.onChange(date);
  };

  render() {
    const {
      id, label, name, dateFormat, containerClassName,
    } = this.props;
    const error = this.getError();
    const blockClasses = classnames('form-field', containerClassName, {
      'has-error': !!error,
    });

    return (
      <div className={blockClasses}>
        <label htmlFor={id}>{label}</label>

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
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.object,
  dateFormat: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  containerClassName: PropTypes.string,
  validations: PropTypes.array,
};

DatePicker.defaultProps = {
  name: '',
  label: '',
  value: moment(),
  dateFormat: 'DD MMM, YYYY',
  containerClassName: null,
  validations: [],
};

DatePicker.contextTypes = {
  _register: PropTypes.func.isRequired,
  _unregister: PropTypes.func.isRequired,
  _setProps: PropTypes.func.isRequired,
  _handleChange: PropTypes.func.isRequired,
  _handleBlur: PropTypes.func.isRequired,
  _getProps: PropTypes.func.isRequired,
};
