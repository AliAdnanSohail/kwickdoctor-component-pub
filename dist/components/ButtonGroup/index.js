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
// import { action } from '@storybook/addon-actions';

var ButtonGroup = function (_Component) {
  _inherits(ButtonGroup, _Component);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
  }

  _createClass(ButtonGroup, [{
    key: 'render',
    value: function render() {
      //  const { value } = this.props;
      var _props = this.props,
          buttons = _props.buttons,
          primary = _props.primary;

      var classes = (0, _classnames2.default)('button-group', { 'button-group-primary': primary });

      var children = buttons.map(function (button) {
        return _react2.default.createElement(
          'button',
          { key: button.id, className: 'button', onClick: button.onClick },
          button.content
        );
      });

      return _react2.default.createElement(
        'div',
        { className: classes },
        children,
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__hash,
          css: _styles2.default
        })
      );
    }
  }]);

  return ButtonGroup;
}(_react.Component);

exports.default = ButtonGroup;


ButtonGroup.propTypes = {
  primary: _propTypes2.default.bool,
  buttons: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

ButtonGroup.defaultProps = {
  buttons: [{ id: 'bv1', content: 'button 1', onClick: function onClick() {
      console.log('link1');
    } }, { id: 'bv2', content: 'button 2', onClick: function onClick() {
      console.log('link2');
    } }, { id: 'bv3', content: 'button 3', onClick: function onClick() {
      console.log('link3');
    } }, { id: 'bv4', content: 'button 4', onClick: function onClick() {
      console.log('link4');
    } }],
  primary: false
};