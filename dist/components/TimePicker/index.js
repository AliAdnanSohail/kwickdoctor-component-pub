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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimePicker = function (_Component) {
  _inherits(TimePicker, _Component);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

    _this.state = {
      defaultInputText: _this.props.defaultInputText,
      selectedHours: '01',
      selectedMin: '00',
      hoursToched: false,
      minutsToched: false,
      visibleHoursList: false,
      visibleMinutsList: false,
      visibleTimeBlock: false,
      hours: [{ value: '01' }, { value: '02' }, { value: '03' }, { value: '04' }, { value: '05' }, { value: '06' }, { value: '07' }, { value: '08' }, { value: '09' }, { value: '10' }, { value: '11' }, { value: '12' }],
      minuts: [{ value: '00' }, { value: '30' }]
    };

    _this.classnames = (0, _classnames2.default)({
      'b-select__option_selected': true
    });
    return _this;
  }

  _createClass(TimePicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'changeTime',
    value: function changeTime() {
      this.setState({ defaultInputText: this.state.selectedHours + ':' + this.state.selectedMin });
      this.props.onChange();
    }
  }, {
    key: 'changeMin',
    value: function changeMin(event) {
      var _this2 = this;

      this.setState({ selectedMin: event.target.textContent });
      setTimeout(function () {
        _this2.changeTime();
        _this2.setState(function (prevState) {
          return { minutsToched: !prevState.minutsToched };
        });
        _this2.timeBlockController();
      }, 0);
    }
  }, {
    key: 'changeHours',
    value: function changeHours(event) {
      var _this3 = this;

      this.setState({ selectedHours: event.target.textContent });
      setTimeout(function () {
        _this3.changeTime();
        _this3.setState(function (prevState) {
          return { hoursToched: !prevState.hoursToched };
        });
        _this3.timeBlockController();
      }, 0);
    }
  }, {
    key: 'timeBlockController',
    value: function timeBlockController() {
      if (this.state.hoursToched && this.state.minutsToched) {
        this.switchTimeBlock();
      }
    }
  }, {
    key: 'switchHoursList',
    value: function switchHoursList() {
      this.setState(function (prevState) {
        return { visibleHoursList: !prevState.visibleHoursList };
      });
    }
  }, {
    key: 'switchMinutsList',
    value: function switchMinutsList() {
      this.setState(function (prevState) {
        return { visibleMinutsList: !prevState.visibleMinutsList };
      });
    }
  }, {
    key: 'switchTimeBlock',
    value: function switchTimeBlock() {
      this.setState(function (prevState) {
        return { visibleTimeBlock: !prevState.visibleTimeBlock };
      });
      this.setState({ hoursToched: false });
      this.setState({ minutsToched: false });
    }
  }, {
    key: 'renderHoursList',
    value: function renderHoursList() {
      var _this4 = this;

      if (this.state.visibleHoursList) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-select__options-wrap'
            },
            this.state.hours.map(function (time) {
              return _react2.default.createElement(
                'div',
                {
                  role: 'button',
                  tabIndex: '0',
                  onClick: function onClick(e) {
                    return _this4.changeHours(e);
                  },
                  onKeyPress: function onKeyPress(e) {
                    return _this4.changeHours(e);
                  },

                  key: time.value,
                  className: 'jsx-' + _styles2.default.__scopedHash + ' ' + ((0, _classnames2.default)('b-select__option', { 'b-select__option_selected': _this4.state.selectedHours === time.value }) || '')
                },
                time.value
              );
            })
          ),
          _react2.default.createElement(_style2.default, {
            styleId: _styles2.default.__scopedHash,
            css: _styles2.default.__scoped
          })
        );
      }
      return '';
    }
  }, {
    key: 'renderMinuntsList',
    value: function renderMinuntsList() {
      var _this5 = this;

      if (this.state.visibleMinutsList) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-select__options-wrap b-select__options-wrap_size_small'
            },
            this.state.minuts.map(function (time) {
              return _react2.default.createElement(
                'div',
                {
                  role: 'button',
                  tabIndex: '0',

                  key: time.value,
                  onClick: function onClick(e) {
                    return _this5.changeMin(e);
                  },
                  onKeyPress: function onKeyPress(e) {
                    return _this5.changeMin(e);
                  },
                  className: 'jsx-' + _styles2.default.__scopedHash + ' ' + ((0, _classnames2.default)('b-select__option', { 'b-select__option_selected': _this5.state.selectedMin == time.value }) || '')
                },
                time.value
              );
            })
          ),
          _react2.default.createElement(_style2.default, {
            styleId: _styles2.default.__scopedHash,
            css: _styles2.default.__scoped
          })
        );
      }
      return '';
    }
  }, {
    key: 'renderTimeBlock',
    value: function renderTimeBlock() {
      var _this6 = this;

      if (this.state.visibleTimeBlock) {
        return _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-time-picker__get-time'
          },
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-time-picker__get-time-wrap'
            },
            _react2.default.createElement(
              'div',
              {
                role: 'button',
                tabIndex: '0',
                onClick: function onClick(e) {
                  return _this6.switchHoursList(e);
                },
                onKeyPress: function onKeyPress(e) {
                  return _this6.switchHoursList(e);
                },
                className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-select'
              },
              _react2.default.createElement(
                'div',
                {
                  className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-select__field'
                },
                this.state.selectedHours,
                _react2.default.createElement(
                  'div',
                  {
                    className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-select__arrow'
                  },
                  _react2.default.createElement('img', { src: require('./image/previous.svg'), alt: 'prevuous', className: 'jsx-' + _styles2.default.__scopedHash
                  })
                ),
                this.renderHoursList()
              )
            ),
            _react2.default.createElement(
              'div',
              {
                role: 'button',
                tabIndex: '0',
                onClick: function onClick(e) {
                  return _this6.switchMinutsList(e);
                },
                onKeyPress: function onKeyPress(e) {
                  return _this6.switchMinutsList(e);
                },
                className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-select'
              },
              _react2.default.createElement(
                'div',
                {
                  className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-select__field'
                },
                this.state.selectedMin,
                _react2.default.createElement(
                  'div',
                  {
                    className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-select__arrow'
                  },
                  _react2.default.createElement('img', { src: require('./image/previous.svg'), alt: 'previous', className: 'jsx-' + _styles2.default.__scopedHash
                  })
                ),
                this.renderMinuntsList()
              )
            )
          ),
          _react2.default.createElement(_style2.default, {
            styleId: _styles2.default.__scopedHash,
            css: _styles2.default.__scoped
          })
        );
      }
      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var _props = this.props,
          title = _props.title,
          onChange = _props.onChange;

      var classes = (0, _classnames2.default)('b-time-picker');

      return _react2.default.createElement(
        'section',
        {
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + (classes || '')
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-time-picker__wrapper'
          },
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-time-picker__title'
            },
            title
          ),
          _react2.default.createElement(
            'div',
            {
              role: 'button',
              tabIndex: '0',
              onClick: function onClick(e) {
                return _this7.switchTimeBlock(e);
              },
              onKeyPress: function onKeyPress(e) {
                return _this7.switchTimeBlock(e);
              },
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-time-picker__input'
            },
            _react2.default.createElement(
              'div',
              {
                className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-time-picker__logo'
              },
              _react2.default.createElement('img', { src: require('./image/clock2.svg'), alt: 'clock', className: 'jsx-' + _styles2.default.__scopedHash
              })
            ),
            _react2.default.createElement('input', {
              type: 'text',

              onChange: onChange,
              value: this.state.defaultInputText,
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'b-input'
            })
          ),
          this.renderTimeBlock()
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return TimePicker;
}(_react.Component);

exports.default = TimePicker;


TimePicker.propTypes = {
  title: _propTypes2.default.string.isRequired,
  defaultInputText: _propTypes2.default.string.isRequired
};

TimePicker.defaultProps = {};