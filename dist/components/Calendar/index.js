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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _momentRange = require('moment-range');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Month = require('./Month');

var _Month2 = _interopRequireDefault(_Month);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moment = (0, _momentRange.extendMoment)(_moment2.default);

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.onSelect = function (day, events) {
      _this.setState({ selected: day });
      _this.props.onSelect(day, events);
    };

    _this.onChangeMonth = function (count) {
      return _this.setState({ current: _this.state.current.add(count, 'month') });
    };

    _this.getEvents = function (date) {
      return _this.props.hasEvents ? _this.props.events.filter(function (event) {
        return date.isSame(event.date, 'day');
      }) : [];
    };

    _this.getDays = function () {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max;
      var _this$state = _this.state,
          selected = _this$state.selected,
          current = _this$state.current;


      var start = current.clone().startOf('month').weekday(0);

      var end = current.clone().endOf('month').weekday(6);

      var days = [];
      var momentDays = moment().range(start, end).by('days');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = momentDays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var day = _step.value;

          days.push(day);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return days.map(function (day) {
        return {
          day: day,
          disabled: min && day.isBefore(min, 'day') || max && day.isAfter(max, 'day'),
          selected: day.isSame(selected, 'day'),
          events: _this.getEvents(day),
          onSelect: _this.onSelect
        };
      });
    };

    _this.getWeekNames = function () {
      return Array.from(new Array(7), function (value, index) {
        return index;
      }).map(function (item) {
        return moment().weekday(item).format('ddd');
      });
    };

    _this.renderNavigation = function () {
      var current = _this.state.current;


      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles.navigation.__scopedHash + ' ' + 'navigation'
        },
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this.onChangeMonth(-1);
            }, className: 'jsx-' + _styles.navigation.__scopedHash + ' ' + 'prev'
          },
          _react2.default.createElement(
            'i',
            {
              className: 'jsx-' + _styles.navigation.__scopedHash + ' ' + 'material-icons'
            },
            'navigate_before'
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles.navigation.__scopedHash + ' ' + 'navigation__month'
          },
          current.format('MMMM'),
          _react2.default.createElement(
            'span',
            {
              className: 'jsx-' + _styles.navigation.__scopedHash
            },
            '\xB7'
          ),
          current.format('YYYY')
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this.onChangeMonth(1);
            }, className: 'jsx-' + _styles.navigation.__scopedHash + ' ' + 'next'
          },
          _react2.default.createElement(
            'i',
            {
              className: 'jsx-' + _styles.navigation.__scopedHash + ' ' + 'material-icons'
            },
            'navigate_next'
          )
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.navigation.__scopedHash,
          css: _styles.navigation.__scoped
        })
      );
    };

    _this.renderHeader = function () {
      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles.header.__scopedHash
        },
        _this.renderNavigation(),
        _react2.default.createElement(
          'ul',
          {
            className: 'jsx-' + _styles.header.__scopedHash + ' ' + 'weekdays'
          },
          _this.getWeekNames().map(function (item) {
            return _react2.default.createElement(
              'li',
              { key: item, className: 'jsx-' + _styles.header.__scopedHash + ' ' + 'weekdays__item'
              },
              item
            );
          })
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.header.__scopedHash,
          css: _styles.header.__scoped
        })
      );
    };

    _this.state = { selected: props.selected.clone(), current: props.selected.clone() };
    return _this;
  }

  _createClass(Calendar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles.calendar.__scopedHash + ' ' + 'calendar'
        },
        this.renderHeader(),
        _react2.default.createElement(_Month2.default, { days: this.getDays() }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.calendar.__scopedHash,
          css: _styles.calendar.__scoped
        })
      );
    }
  }]);

  return Calendar;
}(_react.Component);

exports.default = Calendar;


Calendar.propTypes = {
  events: _propTypes2.default.array,
  hasEvents: _propTypes2.default.bool,
  min: _propTypes2.default.object,
  max: _propTypes2.default.object,
  onSelect: _propTypes2.default.func,
  selected: _propTypes2.default.object
};

Calendar.defaultProps = {
  events: [],
  hasEvents: false,
  min: undefined,
  max: undefined,
  onSelect: function onSelect() {},
  selected: moment()
};