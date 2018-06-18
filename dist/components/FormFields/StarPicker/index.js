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

  function StarPicker(props) {
    _classCallCheck(this, StarPicker);

    var _this = _possibleConstructorReturn(this, (StarPicker.__proto__ || Object.getPrototypeOf(StarPicker)).call(this, props));

    _this.state = { selectedOption: _this.props.rank, stars: _this.generateStars() };
    return _this;
  }

  _createClass(StarPicker, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        selectedOption: parseInt(e.target.value, 10)
      });
    }
  }, {
    key: 'generateStars',
    value: function generateStars() {
      var res = [];
      for (var i = 1; i <= this.props.amount; i += 1) {
        res.push({ key: 'star' + i.toString(), value: parseInt(i, 10) });
      }
      return res;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        this.state.stars.map(function (star) {
          return _react2.default.createElement(
            'label',
            { key: star.key, htmlFor: star.value + '-' + star.key, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'star'
            },
            _react2.default.createElement('input', {
              type: 'radio',
              name: star.value,
              id: star.value + '-' + star.key,
              value: star.value,
              checked: _this2.state.selectedOption === star.value,
              onChange: function onChange(e) {
                return _this2.handleChange(e);
              },
              onClick: _this2.props.onClick,
              className: 'jsx-' + _styles2.default.__scopedHash
            }),
            _react2.default.createElement(_materialIconsReact2.default, { icon: 'star' })
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
  rank: _propTypes2.default.number.isRequired,
  amount: _propTypes2.default.number.isRequired,
  onClick: _propTypes2.default.func.isRequired
};