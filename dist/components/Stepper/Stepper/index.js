'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StepperHeader = require('../StepperHeader');

var _StepperHeader2 = _interopRequireDefault(_StepperHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stepper = function (_Component) {
  _inherits(Stepper, _Component);

  _createClass(Stepper, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props) {
      return { activeStep: props.activeStep };
    }
  }]);

  function Stepper(props) {
    _classCallCheck(this, Stepper);

    var _this = _possibleConstructorReturn(this, (Stepper.__proto__ || Object.getPrototypeOf(Stepper)).call(this, props));

    _this.state = { activeStep: props.activeStep };
    return _this;
  }

  _createClass(Stepper, [{
    key: 'render',
    value: function render() {
      var activeStep = this.state.activeStep;
      var _props = this.props,
          className = _props.className,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(_StepperHeader2.default, { active: activeStep, total: _react2.default.Children.count(children) }),
        _react2.default.Children.map(children, function (step, index) {
          var controlProps = { index: index, active: activeStep === index };

          return _react2.default.cloneElement(step, _extends({}, step.props, controlProps));
        })
      );
    }
  }]);

  return Stepper;
}(_react.Component);

exports.default = Stepper;


Stepper.propTypes = {
  activeStep: _propTypes2.default.number,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired
};

Stepper.defaultProps = {
  activeStep: 0,
  className: undefined
};