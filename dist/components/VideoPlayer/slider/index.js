'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('rc-slider/assets/index.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSlider = require('rc-slider');

var _rcSlider2 = _interopRequireDefault(_rcSlider);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoSlider = function (_Component) {
  _inherits(VideoSlider, _Component);

  function VideoSlider(props) {
    _classCallCheck(this, VideoSlider);

    var _this = _possibleConstructorReturn(this, (VideoSlider.__proto__ || Object.getPrototypeOf(VideoSlider)).call(this, props));

    _this.wrapperStyle = { width: _this.props.width || '60%' };
    return _this;
  }

  _createClass(VideoSlider, [{
    key: 'render',
    value: function render() {
      // this.getMediaDevices();
      return _react2.default.createElement(
        'div',
        { style: this.wrapperStyle },
        _react2.default.createElement(_rcSlider2.default, {
          min: this.props.min,
          max: this.props.max,
          onChange: this.props.onChange,
          value: this.props.value,
          trackStyle: { backgroundColor: '#bfdef2' },
          handleStyle: {
            borderColor: '#bfdef2',
            backgroundColor: '#dee9ef'
          },

          railStyle: { backgroundColor: '#dee9ef' }
        })
      );
    }
  }]);

  return VideoSlider;
}(_react.Component);

exports.default = VideoSlider;


VideoSlider.propTypes = {
  value: _propTypes2.default.number.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  width: _propTypes2.default.string
};

VideoSlider.defaultProps = {
  min: 0,
  max: 100,
  width: '60%'
};