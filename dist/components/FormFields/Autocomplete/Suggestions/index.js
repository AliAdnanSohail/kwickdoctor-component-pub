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

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Suggestions = function (_Component) {
  _inherits(Suggestions, _Component);

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
          onClick = _this$props.onClick;


      return items.map(function (suggestion, index) {
        return _react2.default.createElement(
          'li',
          { key: suggestion, className: 'jsx-' + _styles.suggestion.__scopedHash + ' ' + 'suggestion'
          },
          _react2.default.createElement(
            'button',
            {
              onMouseDown: function onMouseDown(event) {
                event.stopPropagation();

                onClick(suggestion, index);
              },
              className: 'jsx-' + _styles.suggestion.__scopedHash
            },
            suggestion
          ),
          _react2.default.createElement(_style2.default, {
            styleId: _styles.suggestion.__scopedHash,
            css: _styles.suggestion.__scoped
          })
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Suggestions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          active = _props.active;


      return !!items.length && active && _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'ul',
          {
            className: 'jsx-' + _styles.suggestions.__scopedHash + ' ' + 'suggestions'
          },
          this.renderSuggestions()
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.suggestions.__scopedHash,
          css: _styles.suggestions.__scoped
        })
      );
    }
  }]);

  return Suggestions;
}(_react.Component);

exports.default = Suggestions;


Suggestions.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  items: _propTypes2.default.array.isRequired,
  onClick: _propTypes2.default.func.isRequired
};