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

var _Add = require('grommet/components/icons/base/Add');

var _Add2 = _interopRequireDefault(_Add);

var _keys = require('../../../../utils/keys');

var _keys2 = _interopRequireDefault(_keys);

var _Suggestions = require('./../Suggestions');

var _Suggestions2 = _interopRequireDefault(_Suggestions);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExistingTags = function (_React$Component) {
  _inherits(ExistingTags, _React$Component);

  function ExistingTags(props) {
    _classCallCheck(this, ExistingTags);

    var _this = _possibleConstructorReturn(this, (ExistingTags.__proto__ || Object.getPrototypeOf(ExistingTags)).call(this, props));

    _this.handleClick = function () {
      _this.setState({
        selectedIndex: -1,
        selectionMode: false,
        isFocused: !_this.state.isFocused
      });
    };

    _this.handleBlur = function () {
      _this.setState({
        isFocused: false
      });
    };

    _this.handleKeyDown = function (e) {
      var _this$state = _this.state,
          selectedIndex = _this$state.selectedIndex,
          selectionMode = _this$state.selectionMode;
      var _this$props = _this.props,
          existingTags = _this$props.existingTags,
          handleClick = _this$props.handleClick;


      if (e.keyCode === _keys2.default.ENTER && selectionMode) {
        _this.setState({
          selectionMode: false
        });
        handleClick(selectedIndex);
      }

      if (e.keyCode === _keys2.default.UP_ARROW) {
        e.preventDefault();
        _this.setState({
          selectedIndex: selectedIndex <= 0 ? existingTags.length - 1 : selectedIndex - 1,
          selectionMode: true
        });
      }

      if (e.keyCode === _keys2.default.DOWN_ARROW) {
        e.preventDefault();
        _this.setState({
          selectedIndex: existingTags.length === 0 ? -1 : (selectedIndex + 1) % existingTags.length,
          selectionMode: true
        });
      }
    };

    _this.state = {
      isFocused: false,
      selectedIndex: -1,
      selectionMode: false
    };
    return _this;
  }

  _createClass(ExistingTags, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('click', this.handleBlur);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this.handleBlur);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isFocused = _state.isFocused,
          selectedIndex = _state.selectedIndex;
      var _props = this.props,
          handleClick = _props.handleClick,
          existingTags = _props.existingTags;


      return !!existingTags.length && _react2.default.createElement(
        'li',
        {
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'tag-input__add-existing-tag'
        },
        _react2.default.createElement(
          'button',
          { onClick: this.handleClick, onKeyDown: this.handleKeyDown, className: 'jsx-' + _styles2.default.__scopedHash
          },
          _react2.default.createElement(_Add2.default, null),
          'Add existing tag'
        ),
        _react2.default.createElement(_Suggestions2.default, {
          isFocused: isFocused,
          selected: selectedIndex,
          onClick: handleClick,
          items: existingTags
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return ExistingTags;
}(_react2.default.Component);

exports.default = ExistingTags;


ExistingTags.propTypes = {
  existingTags: _propTypes2.default.array.isRequired,
  handleClick: _propTypes2.default.func.isRequired
};