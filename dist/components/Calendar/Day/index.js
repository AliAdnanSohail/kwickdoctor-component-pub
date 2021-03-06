'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Day = function (_Component) {
  _inherits(Day, _Component);

  function Day() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Day.__proto__ || Object.getPrototypeOf(Day)).call.apply(_ref, [this].concat(args))), _this), _this.handleSelect = function () {
      var _this$props = _this.props,
          day = _this$props.day,
          disabled = _this$props.disabled,
          events = _this$props.events,
          onSelect = _this$props.onSelect;


      if (!disabled) {
        onSelect(day, events);
      }
    }, _this.renderDots = function () {
      var _this$props2 = _this.props,
          events = _this$props2.events,
          selected = _this$props2.selected;


      return selected && events.length > 0 && _react2.default.createElement(
        'ul',
        {
          className: 'jsx-' + _styles.events.__scopedHash + ' ' + 'events'
        },
        events.slice(0, 3).map(function (event) {
          return _react2.default.createElement('li', { key: event.date.format('D') + '-' + Math.random(), className: 'jsx-' + _styles.events.__scopedHash + ' ' + 'events__item'
          });
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.events.__scopedHash,
          css: _styles.events.__scoped
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Day, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          day = _props.day,
          selected = _props.selected,
          disabled = _props.disabled,
          events = _props.events;


      var classes = (0, _classnames2.default)('day', {
        'day--selected': selected,
        'day--has-events': selected && events.length > 0,
        'day--disabled': disabled
      });

      return _react2.default.createElement(
        'button',
        {
          'data-day': day.format('YYYY-MM-DD'),
          onClick: this.handleSelect,
          type: 'button',
          className: 'jsx-' + _styles.day.__scopedHash + ' ' + (classes || '')
        },
        _react2.default.createElement(
          'span',
          {
            className: 'jsx-' + _styles.day.__scopedHash + ' ' + 'day__border'
          },
          day.format('D')
        ),
        this.renderDots(),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.day.__scopedHash,
          css: _styles.day.__scoped
        })
      );
    }
  }]);

  return Day;
}(_react.Component);

exports.default = Day;


Day.propTypes = {
  day: _propTypes2.default.object.isRequired,
  disabled: _propTypes2.default.bool,
  selected: _propTypes2.default.bool,
  events: _propTypes2.default.array,
  onSelect: _propTypes2.default.func
};

Day.defaultProps = {
  disabled: false,
  selected: false,
  events: [],
  onSelect: function onSelect() {}
};