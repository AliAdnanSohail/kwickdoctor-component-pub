'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _arrays = require('shallow-equal/arrays');

var _arrays2 = _interopRequireDefault(_arrays);

var _objects = require('shallow-equal/objects');

var _objects2 = _interopRequireDefault(_objects);

require('react-datepicker/dist/react-datepicker.css');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = (_temp = _class = function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _initialiseProps.call(_this);

    _this.id = (0, _v2.default)();
    _this.state = {
      value: (0, _moment2.default)(props.value)
    };
    return _this;
  }

  _createClass(DatePicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.context._register(this, this.id);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var nextValidations = _ref.validations,
          nextProps = _objectWithoutProperties(_ref, ['validations']);

      var _props = this.props,
          validations = _props.validations,
          props = _objectWithoutProperties(_props, ['validations']);

      if (!(0, _objects2.default)(props, nextProps) || !(0, _arrays2.default)(validations, nextValidations)) {
        this.context._setProps(nextProps, this.id);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return nextContext !== this.context;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.context._unregister(this, this.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          label = _props2.label,
          name = _props2.name,
          dateFormat = _props2.dateFormat,
          containerClassName = _props2.containerClassName;

      var error = this.getError();
      var blockClasses = (0, _classnames2.default)('form-field', containerClassName, {
        'has-error': !!error
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
          id: id,
          name: name,
          selected: this.state.value,
          onChange: this.handleChange,
          onChangeRaw: this.handleChange,
          className: 'datepicker',
          calendarClassName: 'calendar',
          dateFormat: dateFormat,
          useWeekdaysShort: true
        }),
        this.errorMessage(error),
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
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getError = function () {
    var props = _this2.context._getProps(_this2.id);
    if (!props) {
      return null;
    }
    return props.error;
  };

  this.errorMessage = function (error) {
    return error && _react2.default.createElement(
      'div',
      { className: 'input-error' },
      error
    );
  };

  this.handleChange = function (dateOrDateString) {
    var date = dateOrDateString;
    if (date.target && typeof date.target.value === 'string') {
      date = (0, _moment2.default)(date.target.value, _this2.props.dateFormat, true);
    }

    _this2.context._handleChange({ target: { value: date } }, _this2.id);

    _this2.setState({ value: date });
    _this2.props.onChange(date);
  };
}, _temp);
exports.default = DatePicker;


DatePicker.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  value: _propTypes2.default.object,
  dateFormat: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired,
  containerClassName: _propTypes2.default.string,
  validations: _propTypes2.default.array
};

DatePicker.defaultProps = {
  name: '',
  label: '',
  value: (0, _moment2.default)(),
  dateFormat: 'DD MMM, YYYY',
  containerClassName: null,
  validations: []
};

DatePicker.contextTypes = {
  _register: _propTypes2.default.func.isRequired,
  _unregister: _propTypes2.default.func.isRequired,
  _setProps: _propTypes2.default.func.isRequired,
  _handleChange: _propTypes2.default.func.isRequired,
  _handleBlur: _propTypes2.default.func.isRequired,
  _getProps: _propTypes2.default.func.isRequired
};