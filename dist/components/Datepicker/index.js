'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('react-datepicker/dist/react-datepicker.css');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Datepicker = function (_Component) {
  _inherits(Datepicker, _Component);

  function Datepicker(props) {
    _classCallCheck(this, Datepicker);

    var _this = _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this, props));

    _this.handleChange = function (date) {
      _this.setState({ value: date });
      _this.props.onChange(date);
    };

    _this.state = { value: props.value };
    return _this;
  }

  _createClass(Datepicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          label = _props.label,
          name = _props.name,
          dateFormat = _props.dateFormat;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: id },
          label
        ),
        _react2.default.createElement(_reactDatepicker2.default, {
          id: id,
          name: name,
          selected: this.state.value,
          onChange: function onChange(date) {
            return _this2.handleChange(date);
          },
          className: 'datepicker',
          calendarClassName: 'calendar',
          dateFormat: dateFormat,
          useWeekdaysShort: true
        }),
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
        )
      );
    }
  }]);

  return Datepicker;
}(_react.Component);

exports.default = Datepicker;


Datepicker.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  value: _propTypes2.default.object,
  dateFormat: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired
};

Datepicker.defaultProps = {
  name: '',
  label: '',
  value: (0, _moment2.default)(),
  dateFormat: 'DD MMM, YYYY'
};