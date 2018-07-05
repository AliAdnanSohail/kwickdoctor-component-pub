'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _materialIconsReact = require('material-icons-react');

var _materialIconsReact2 = _interopRequireDefault(_materialIconsReact);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StarPicker = function (_Component) {
  _inherits(StarPicker, _Component);

  function StarPicker() {
    _classCallCheck(this, StarPicker);

    return _possibleConstructorReturn(this, (StarPicker.__proto__ || Object.getPrototypeOf(StarPicker)).apply(this, arguments));
  }

  _createClass(StarPicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          input = _props.input,
          label = _props.label,
          max = _props.max;


      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'container'
        },
        _react2.default.createElement(
          'label',
          { htmlFor: input.name, className: 'jsx-' + _styles2.default.__scopedHash
          },
          label
        ),
        Array.from(new Array(max), function (value, index) {
          return index;
        }).map(function (item) {
          var value = item + 1;

          return _react2.default.createElement(
            'label',
            { key: item, htmlFor: input.name + '-' + value, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'star'
            },
            _react2.default.createElement('input', _extends({}, input, { id: input.name + '-' + value, type: 'radio', value: value, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + (input.className != null && input.className || '')
            })),
            value <= input.value ? _react2.default.createElement(_materialIconsReact2.default, { color: '#45cf7a', icon: 'star', size: 36 }) : _react2.default.createElement(_materialIconsReact2.default, { color: '#babbd0', icon: 'star_outline', size: 36 })
          );
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return StarPicker;
}(_react.Component);

exports.default = StarPicker;


StarPicker.propTypes = {
  label: _propTypes2.default.string,
  max: _propTypes2.default.number.isRequired
};

StarPicker.defaultProps = {
  label: ''
};