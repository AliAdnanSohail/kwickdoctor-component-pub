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

var _materialIconsReact = require('material-icons-react');

var _materialIconsReact2 = _interopRequireDefault(_materialIconsReact);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepperHeader = function (_Component) {
  _inherits(StepperHeader, _Component);

  function StepperHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StepperHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StepperHeader.__proto__ || Object.getPrototypeOf(StepperHeader)).call.apply(_ref, [this].concat(args))), _this), _this.renderIcons = function () {
      var _this$props = _this.props,
          active = _this$props.active,
          total = _this$props.total;


      return [].concat(_toConsumableArray(Array(total).keys())).map(function (index) {
        var completed = active > index;

        var classes = (0, _classnames2.default)('step-icon', {
          'step-icon--completed': completed,
          'step-icon--current': active === index,
          'step-icon--last': index === total - 1,
          'step-icon--next': active < index
        });

        return _react2.default.createElement(
          'li',
          { key: index, className: 'jsx-' + _styles.stepIcon.__scopedHash + ' ' + (classes || '')
          },
          _react2.default.createElement(
            'span',
            {
              className: 'jsx-' + _styles.stepIcon.__scopedHash
            },
            completed ? _react2.default.createElement(_materialIconsReact2.default, { color: '#6fcb83', icon: 'done' }) : undefined
          ),
          _react2.default.createElement(_style2.default, {
            styleId: _styles.stepIcon.__scopedHash,
            css: _styles.stepIcon.__scoped
          })
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StepperHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        {
          className: 'jsx-' + _styles.stepHeader.__scopedHash + ' ' + 'stepper-header'
        },
        this.renderIcons(),
        _react2.default.createElement(_style2.default, {
          styleId: _styles.stepHeader.__scopedHash,
          css: _styles.stepHeader.__scoped
        })
      );
    }
  }]);

  return StepperHeader;
}(_react.Component);

exports.default = StepperHeader;


StepperHeader.propTypes = {
  active: _propTypes2.default.number.isRequired,
  total: _propTypes2.default.number.isRequired
};