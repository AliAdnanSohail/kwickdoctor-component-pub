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

var Suggestions = function (_React$Component) {
  _inherits(Suggestions, _React$Component);

  function Suggestions() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Suggestions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Suggestions.__proto__ || Object.getPrototypeOf(Suggestions)).call.apply(_ref, [this].concat(args))), _this), _this.renderSuggestions = function () {
      var _this$props = _this.props,
          items = _this$props.items,
          handleClick = _this$props.handleClick,
          selected = _this$props.selected;


      return items.map(function (suggestion, index) {
        return _react2.default.createElement(
          'li',
          {
            ref: function ref(li) {
              if (index === selected) {
                _this.selectedElement = li;
              }
            },

            key: suggestion,
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + ((0, _classnames2.default)('tag-input__suggestion', { 'tag-input__suggestion--selected': index === selected }) || '')
          },
          _react2.default.createElement(
            'button',
            { onMouseDown: function onMouseDown() {
                handleClick(index);
              }, className: 'jsx-' + _styles2.default.__scopedHash
            },
            suggestion
          ),
          _react2.default.createElement(_style2.default, {
            styleId: _styles2.default.__scopedHash,
            css: _styles2.default.__scoped
          })
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Suggestions, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          items = _props.items,
          isFocused = _props.isFocused,
          selected = _props.selected;

      if (selected !== -1 && prevProps.selected !== selected && isFocused && items.length) {
        this.wrapperElement.scrollTo(0, this.selectedElement.offsetTop);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          items = _props2.items,
          isFocused = _props2.isFocused;


      return !!items.length && isFocused && _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'tag-input__suggestions'
        },
        _react2.default.createElement(
          'ul',
          { ref: function ref(ul) {
              _this2.wrapperElement = ul;
            }, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'tag-input__suggestions-list'
          },
          this.renderSuggestions()
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return Suggestions;
}(_react2.default.Component);

exports.default = Suggestions;


Suggestions.propTypes = {
  items: _propTypes2.default.array.isRequired,
  handleClick: _propTypes2.default.func.isRequired,
  isFocused: _propTypes2.default.bool.isRequired,
  selected: _propTypes2.default.number.isRequired
};