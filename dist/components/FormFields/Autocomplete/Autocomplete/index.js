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

var _ = require('../');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = require('../../styles');

var _styles4 = _interopRequireDefault(_styles3);

var _keys = require('../../../../utils/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Autocomplete = function (_Component) {
  _inherits(Autocomplete, _Component);

  _createClass(Autocomplete, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props) {
      return {
        suggestions: props.suggestions.filter(function (value, index, self) {
          return self.indexOf(value) === index;
        })
      };
    }
  }]);

  function Autocomplete(props) {
    _classCallCheck(this, Autocomplete);

    var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

    _this.removeTag = function (value) {
      var _this$state = _this.state,
          values = _this$state.values,
          suggestions = _this$state.suggestions;


      var newValues = values.filter(function (item) {
        return item !== value;
      });

      var filtered = suggestions.filter(function (item) {
        return !newValues.some(function (innerItem) {
          return innerItem === item;
        });
      });

      _this.setState({ values: newValues, filteredSuggestions: filtered }, function () {
        _this.props.input.onChange(values);
      });
    };

    _this.handleFocusWrapper = function (event) {
      if (event.target === _this.wrapper) {
        _this.input.focus();
      }
    };

    _this.handleRemoveTag = function (value) {
      _this.removeTag(value);
    };

    _this.handleChangeInput = function (event) {
      var value = event.target.value;
      var _this$state2 = _this.state,
          values = _this$state2.values,
          suggestions = _this$state2.suggestions;

      var filtered = suggestions.filter(function (item) {
        return item.includes(value) && !values.some(function (innerItem) {
          return innerItem === item;
        });
      });
      _this.setState({
        value: value,
        filteredSuggestions: filtered
      });
    };

    _this.handleFocusInput = function () {
      _this.setState({ focused: true });
    };

    _this.handleBlurInput = function () {
      _this.setState({ focused: false });
    };

    _this.handleKeyDownInput = function (event) {
      var _this$state3 = _this.state,
          value = _this$state3.value,
          values = _this$state3.values;


      if (_this.props.delimiters.indexOf(event.keyCode) !== -1 && !event.shiftKey && value !== '' && !values.some(function (item) {
        return item === value;
      })) {
        event.preventDefault();
        if (_this.props.notEditable === false) {
          _this.setState({
            value: '',
            values: _this.state.values.concat([value])
          }, function () {
            _this.props.input.onChange(values);
          });
        } else {
          _this.setState({
            value: ''
          });
        }
      }

      if (event.keyCode === _keys2.default.ESCAPE) {
        event.preventDefault();
        event.stopPropagation();

        _this.input.blur();

        _this.setState({ focused: false });
      }

      if (event.keyCode === _keys2.default.BACKSPACE && event.target.value === '' && values.length) {
        event.preventDefault();
        event.stopPropagation();

        _this.removeTag(values[values.length - 1]);
      }
    };

    _this.handleClickSuggestion = function (value) {
      var _this$state4 = _this.state,
          values = _this$state4.values,
          suggestions = _this$state4.suggestions;


      var filtered = suggestions.filter(function (item) {
        return item !== value && !values.some(function (innerItem) {
          return innerItem === item;
        });
      });

      _this.setState({
        values: _this.state.values.concat([value]),
        filteredSuggestions: filtered,
        value: ''
      }, function () {
        _this.props.input.onChange(values);
      });
    };

    _this.renderTags = function () {
      var values = _this.state.values;


      return values.map(function (item) {
        return _react2.default.createElement(_.Tag, {
          key: item,
          name: item.toString(),
          onRemove: function onRemove() {
            _this.handleRemoveTag(item);
          }
        });
      });
    };

    var list = props.suggestions.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });

    _this.state = {
      focused: false,
      filteredSuggestions: list,
      suggestions: list,
      value: '',
      values: []
    };
    return _this;
  }

  _createClass(Autocomplete, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          containerClassName = _props.containerClassName,
          id = _props.id,
          label = _props.label,
          meta = _props.meta,
          placeholder = _props.placeholder;
      var _state = this.state,
          focused = _state.focused,
          filteredSuggestions = _state.filteredSuggestions,
          value = _state.value;


      var containerClasses = (0, _classnames2.default)('form-field', containerClassName);
      var classes = (0, _classnames2.default)('autocomplete', {
        invalid: meta && meta.error && meta.touched,
        active: meta && meta.active,
        focused: focused
      });

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' ' + (containerClasses || '')
        },
        _react2.default.createElement(
          'label',
          { htmlFor: id, className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash
          },
          label
        ),
        _react2.default.createElement(
          'div',
          {
            role: 'textbox',
            tabIndex: 0,
            ref: function ref(wrapper) {
              _this2.wrapper = wrapper;
            },
            onFocus: this.handleFocusWrapper,
            className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' ' + (classes || '')
          },
          this.renderTags(),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' ' + 'autocomplete__input'
            },
            _react2.default.createElement('input', {
              id: id,
              type: 'text',
              ref: function ref(input) {
                _this2.input = input;
              },
              value: value,
              placeholder: placeholder,
              onChange: this.handleChangeInput,
              onKeyDown: this.handleKeyDownInput,
              onFocus: this.handleFocusInput,
              onBlur: this.handleBlurInput,
              className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash
            }),
            _react2.default.createElement(_.Suggestions, {
              active: focused,
              items: filteredSuggestions,
              onClick: this.handleClickSuggestion
            })
          )
        ),
        meta && meta.error && meta.touched ? _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _styles4.default.__scopedHash + ' jsx-' + _styles3.label.__scopedHash + ' jsx-' + _styles3.error.__scopedHash + ' ' + 'error'
          },
          meta.error
        ) : undefined,
        _react2.default.createElement(_style2.default, {
          styleId: _styles4.default.__scopedHash,
          css: _styles4.default.__scoped
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles3.label.__scopedHash,
          css: _styles3.label.__scoped
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles3.error.__scopedHash,
          css: _styles3.error.__scoped
        }),
        _react2.default.createElement(
          'style',
          null,
          _styles2.default
        )
      );
    }
  }]);

  return Autocomplete;
}(_react.Component);

exports.default = Autocomplete;


Autocomplete.propTypes = {
  containerClassName: _propTypes2.default.string,
  delimiters: _propTypes2.default.array,
  notEditable: _propTypes2.default.bool,
  id: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  meta: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,
  suggestions: _propTypes2.default.array.isRequired
};

Autocomplete.defaultProps = {
  containerClassName: undefined,
  delimiters: [_keys2.default.ENTER, _keys2.default.TAB],
  label: undefined,
  meta: {},
  notEditable: false,
  placeholder: 'Start typing...'
};