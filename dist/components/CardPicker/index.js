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

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardPicker = function (_Component) {
  _inherits(CardPicker, _Component);

  function CardPicker(props) {
    _classCallCheck(this, CardPicker);

    var _this = _possibleConstructorReturn(this, (CardPicker.__proto__ || Object.getPrototypeOf(CardPicker)).call(this, props));

    _this.state = { selectedOption: _this.props.selectedOption };
    return _this;
  }

  _createClass(CardPicker, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        selectedOption: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          cards = _props.cards,
          onClick = _props.onClick;


      var children = cards.map(function (card) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: card.value, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'content-label'
            },
            _react2.default.createElement(
              'div',
              { key: card.value, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + ((_this2.state.selectedOption === card.value ? 'card active' : 'card') || '')
              },
              _react2.default.createElement('input', {
                type: 'radio',
                name: card.value,
                id: card.value,
                value: card.value,
                checked: _this2.state.selectedOption === card.value,
                onChange: function onChange(e) {
                  return _this2.handleChange(e);
                },
                onClick: onClick,
                className: 'jsx-' + _styles2.default.__scopedHash
              }),
              _react2.default.createElement('img', { src: card.img, alt: '', className: 'jsx-' + _styles2.default.__scopedHash
              }),
              _react2.default.createElement(
                'p',
                {
                  className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'content'
                },
                card.content
              )
            )
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
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'card-picker'
        },
        children,
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return CardPicker;
}(_react.Component);

exports.default = CardPicker;

CardPicker.propTypes = {
  cards: _propTypes2.default.array.isRequired,
  onClick: _propTypes2.default.func.isRequired
};