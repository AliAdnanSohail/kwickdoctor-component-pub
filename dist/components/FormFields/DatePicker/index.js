'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

require('react-datepicker/dist/react-datepicker.css');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.handleChange = function (date) {
      var value = (0, _moment2.default)(date.target ? date.target.value : date, _this.props.dateFormat, true);

      if (_moment2.default.isMoment(value) && value.isValid()) {
        _this.setState({ value: value });

        _this.props.input.onChange(value);
      }
    };

    _this.state = { value: (0, _moment2.default)(props.input.value) };
    return _this;
  }

  _createClass(DatePicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          containerClassName = _props.containerClassName,
          dateFormat = _props.dateFormat,
          id = _props.id,
          name = _props.input.name,
          label = _props.label,
          meta = _props.meta;
      var value = this.state.value;


      var blockClasses = (0, _classnames2.default)('form-field', containerClassName, {
        'has-error': !!meta.error
      });

      return _react2.default.createElement(
        'div',
        { className: blockClasses },
        _react2.default.createElement(
          'label',
          { htmlFor: id },
          label
        ),
        _react2.default.createElement(_reactDatepicker2.default, {
          calendarClassName: 'calendar',
          className: 'datepicker',
          dateFormat: dateFormat,
          id: id,
          name: name,
          onChange: this.handleChange,
          onChangeRaw: this.handleChange,
          selected: value,
          useWeekdaysShort: true
        }),
        meta && meta.error && meta.touched && _react2.default.createElement(
          'div',
          { className: 'error' },
          meta.error
        ),
        _react2.default.createElement(
          'style',
          null,
          _styles.datepickerBlock
        ),
        _react2.default.createElement(
          'style',
          null,
          _styles.calendar
        ),
        _react2.default.createElement(
          'style',
          null,
          _styles.datepicker
        ),
        _react2.default.createElement(
          'style',
          null,
          _styles.label
        ),
        _react2.default.createElement(
          'style',
          null,
          _styles.wrapper
        ),
        _react2.default.createElement(
          'style',
          null,
          _styles.error
        )
      );
    }
  }]);

  return DatePicker;
}(_react.Component);

exports.default = DatePicker;


DatePicker.propTypes = {
  containerClassName: _propTypes2.default.string,
  dateFormat: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired,
  input: _propTypes2.default.object,
  label: _propTypes2.default.string,
  meta: _propTypes2.default.object
};

DatePicker.defaultProps = {
  containerClassName: undefined,
  dateFormat: 'DD MMM, YYYY',
  input: {
    value: (0, _moment2.default)()
  },
  label: undefined,
  meta: {}
};