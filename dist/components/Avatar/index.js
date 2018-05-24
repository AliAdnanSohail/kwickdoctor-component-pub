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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _icons = require('grommet/components/icons');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_Component) {
  _inherits(Avatar, _Component);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
  }

  _createClass(Avatar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          src = _props.src,
          squared = _props.squared,
          size = _props.size;


      var thumbStyle = {
        backgroundImage: 'url(' + src + ')'
      };

      var classes = (0, _classnames3.default)('avatar-container', { 'avatar-container--circle': !squared }, _defineProperty({}, 'avatar-container--' + size, size));
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { style: thumbStyle, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + (classes || '')
          },
          _react2.default.createElement(
            'div',
            { style: { backgroundImage: src }, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'avatar-icon'
            },
            !src && _react2.default.createElement(_icons.UserIcon, { size: 'large' })
          )
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return Avatar;
}(_react.Component);

exports.default = Avatar;


Avatar.propTypes = {
  src: _propTypes2.default.string,
  size: _propTypes2.default.string,
  squared: _propTypes2.default.bool
};

Avatar.defaultProps = {
  src: '',
  size: '',
  squared: false
};