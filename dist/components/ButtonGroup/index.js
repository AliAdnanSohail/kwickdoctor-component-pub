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

var ButtonGroup = function (_Component) {
  _inherits(ButtonGroup, _Component);

  function ButtonGroup(props) {
    _classCallCheck(this, ButtonGroup);

    var _this = _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).call(this, props));

    _this.state = { selectedOption: '' };
    return _this;
  }

  _createClass(ButtonGroup, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        selectedOption: e.target.value
      });
      this.props.onChange(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      //  const { value } = this.props;
      var _props = this.props,
          buttons = _props.buttons,
          primary = _props.primary,
          groupLabel = _props.groupLabel;

      var classes = (0, _classnames2.default)('radio-button-group', { primary: primary });

      var common = groupLabel.toLowerCase() || 'group';

      var children = buttons.map(function (button) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          { key: button.value },
          _react2.default.createElement(
            'label',
            { htmlFor: button.value + '-' + common, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + ((_this2.state.selectedOption === button.value ? 'button active' : 'button') || '')
            },
            button.label || button.value,
            _react2.default.createElement('input', {
              type: 'radio',
              name: common,
              id: button.value + '-' + common,
              value: button.value,
              checked: _this2.state.selectedOption === button.value,
              onChange: function onChange(e) {
                return _this2.handleChange(e);
              },
              className: 'jsx-' + _styles2.default.__scopedHash
            })
          ),
          _react2.default.createElement(_style2.default, {
            styleId: _styles2.default.__scopedHash,
            css: _styles2.default.__scoped
          })
        );
      });

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles2.default.__scopedHash
        },
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        }),
        _react2.default.createElement(
          'fieldset',
          {
            className: 'jsx-' + _styles2.default.__scopedHash
          },
          groupLabel.length > 0 && _react2.default.createElement(
            'legend',
            {
              className: 'jsx-' + _styles2.default.__scopedHash
            },
            groupLabel,
            ':'
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + (classes || '')
            },
            children
          )
        )
      );
    }
  }]);

  return ButtonGroup;
}(_react.Component);

exports.default = ButtonGroup;


ButtonGroup.propTypes = {
  primary: _propTypes2.default.bool,
  buttons: _propTypes2.default.arrayOf(_propTypes2.default.object),
  groupLabel: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired
};

ButtonGroup.defaultProps = {
  buttons: [{ value: 'bv1', label: 'button 1' }, { value: 'bv2', label: 'button 2' }, { value: 'bv3', label: 'button 3' }, { value: 'bv4', label: 'button 4' }, { value: 'bv5', label: 'button 5' }, { value: 'bv6', label: 'button 6' }],
  primary: false,
  groupLabel: ''
};