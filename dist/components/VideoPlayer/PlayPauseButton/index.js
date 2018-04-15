'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _css = require('styled-jsx/css');

var _css2 = _interopRequireDefault(_css);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecordButton = function (_Component) {
  _inherits(RecordButton, _Component);

  function RecordButton(props) {
    _classCallCheck(this, RecordButton);

    var _this = _possibleConstructorReturn(this, (RecordButton.__proto__ || Object.getPrototypeOf(RecordButton)).call(this, props));

    _this.changeStyle = function () {
      _this.setState({ recordStarted: !_this.state.recordStarted });
    };

    _this.state = {
      recordStarted: false
    };
    return _this;
  }

  _createClass(RecordButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { className: 'playpause' },
          _react2.default.createElement('input', { type: 'checkbox', value: 'None', id: 'playpause', name: 'check', onClick: this.props.onClick }),
          _react2.default.createElement('label', { htmlFor: 'playpause', tabIndex: 1 }),
          _react2.default.createElement(
            'style',
            null,
            _styles2.default
          )
        )
      );
    }
  }]);

  return RecordButton;
}(_react.Component);

exports.default = RecordButton;