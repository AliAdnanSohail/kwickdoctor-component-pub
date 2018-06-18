'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialIconsReact = require('material-icons-react');

var _materialIconsReact2 = _interopRequireDefault(_materialIconsReact);

var _reactRouterDom = require('react-router-dom');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationItem = function (_Component) {
  _inherits(NavigationItem, _Component);

  function NavigationItem() {
    _classCallCheck(this, NavigationItem);

    return _possibleConstructorReturn(this, (NavigationItem.__proto__ || Object.getPrototypeOf(NavigationItem)).apply(this, arguments));
  }

  _createClass(NavigationItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          route = _props.route,
          label = _props.label,
          icon = _props.icon;


      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { activeClassName: 'nav-item--active', className: 'nav-item', to: route },
          _react2.default.createElement(_materialIconsReact2.default, { color: '#ffffff', icon: icon, size: 24 }),
          _react2.default.createElement(
            'span',
            { className: 'nav-item__label' },
            label
          )
        ),
        _react2.default.createElement(
          'style',
          null,
          _styles2.default
        )
      );
    }
  }]);

  return NavigationItem;
}(_react.Component);

exports.default = NavigationItem;