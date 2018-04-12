'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _keys = require('./../keys');

var _keys2 = _interopRequireDefault(_keys);

var _Tag = require('./../Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _Suggestions = require('./../Suggestions');

var _Suggestions2 = _interopRequireDefault(_Suggestions);

var _ExistingTags = require('./../ExistingTags');

var _ExistingTags2 = _interopRequireDefault(_ExistingTags);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = require('./../../FormFields/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagInput = function (_Component) {
  _inherits(TagInput, _Component);

  function TagInput(props) {
    _classCallCheck(this, TagInput);

    var _this = _possibleConstructorReturn(this, (TagInput.__proto__ || Object.getPrototypeOf(TagInput)).call(this, props));

    _this.getTagName = function (tag) {
      if (tag !== null && (typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) === 'object') {
        return tag[_this.props.tagNameProp].toString();
      }

      return tag.toString();
    };

    _this.getLowerCaseTagsNames = function () {
      return _this.state.tags.map(function (tag) {
        return _this.getTagName(tag).toLowerCase();
      });
    };

    _this.getFilteredSuggestions = function (query) {
      var _this$props = _this.props,
          suggestions = _this$props.suggestions,
          minQueryLength = _this$props.minQueryLength;


      if (query.length < minQueryLength) {
        return [];
      }

      var tagsNames = _this.getLowerCaseTagsNames();

      if (typeof suggestions === 'function') {
        return suggestions(query, tagsNames);
      }

      return suggestions.filter(function (value, index) {
        return suggestions.indexOf(value) === index;
      }).filter(function (item) {
        return item.toLowerCase().indexOf(query.toLowerCase()) === 0 && tagsNames.indexOf(item.toLowerCase()) === -1;
      }).slice(0, 10);
    };

    _this.getFilteredExistingsTags = function () {
      var existingTags = _this.props.existingTags;

      var tagsNames = _this.getLowerCaseTagsNames();

      return existingTags.filter(function (item) {
        return tagsNames.indexOf(item.toLowerCase()) === -1;
      });
    };

    _this.addTag = function (name) {
      var tags = _this.state.tags;
      var tagCreate = _this.props.tagCreate;


      var newTag = tagCreate(name);

      if (tags.find(function (tag) {
        return _this.getTagName(newTag).toLowerCase() === _this.getTagName(tag).toLowerCase();
      }) !== undefined) {
        return;
      }

      var newTags = tags.slice(0);
      newTags.push(newTag);

      _this.setState({
        tags: newTags
      });
      _this.handleTagsChange(newTags);
      _this.resetAndFocusInput();
    };

    _this.removeTag = function (name) {
      var tags = _this.state.tags;

      var newTags = tags.filter(function (tag) {
        return _this.getTagName(tag) !== name;
      });
      _this.setState({
        tags: newTags
      });
      _this.handleTagsChange(newTags);
    };

    _this.resetAndFocusInput = function () {
      _this.setState({
        query: '',
        suggestions: [],
        selectedIndex: -1,
        selectionMode: false
      });
      if (_this.textInput) {
        _this.textInput.focus();
        _this.textInput.click();
      }
    };

    _this.updateSuggestions = (0, _lodash2.default)(function () {
      var query = _this.state.query;

      var suggestions = _this.getFilteredSuggestions(query);
      if (((typeof suggestions === 'undefined' ? 'undefined' : _typeof(suggestions)) === 'object' || typeof suggestions === 'function') && typeof suggestions.then === 'function') {
        suggestions.then(function (result) {
          _this.setState({ suggestions: result });
        });
      } else {
        _this.setState({ suggestions: suggestions });
      }
    }, _this.props.suggestionsDelay);

    _this.handleInputChange = function (e) {
      var query = e.target.value;
      _this.updateSuggestions();
      _this.setState({
        query: query,
        selectedIndex: -1,
        selectionMode: false
      });
    };

    _this.handleInputKeyDown = function (e) {
      var _this$state = _this.state,
          query = _this$state.query,
          selectedIndex = _this$state.selectedIndex,
          suggestions = _this$state.suggestions,
          selectionMode = _this$state.selectionMode,
          tags = _this$state.tags;


      if (e.keyCode === _keys2.default.ESCAPE) {
        e.preventDefault();
        e.stopPropagation();
        _this.setState({
          selectedIndex: -1,
          selectionMode: false,
          suggestions: []
        });
      }

      if (_this.props.delimiters.indexOf(e.keyCode) !== -1 && !e.shiftKey) {
        if (e.keyCode !== _keys2.default.TAB || query !== '') {
          e.preventDefault();
        }

        var selectedQuery = selectionMode && selectedIndex !== -1 ? suggestions[selectedIndex] : query;

        if (selectedQuery !== '') {
          _this.addTag(selectedQuery);
        }
      }

      if (e.keyCode === _keys2.default.BACKSPACE && query === '' && tags.length) {
        _this.removeTag(_this.getTagName(tags[tags.length - 1]));
      }

      if (e.keyCode === _keys2.default.RIGHT_ARROW && suggestions.length && selectedIndex !== -1) {
        _this.setState({
          query: suggestions[selectedIndex],
          selectedIndex: -1,
          selectionMode: false,
          suggestions: []
        });
        _this.updateSuggestions();
      }

      if (e.keyCode === _keys2.default.UP_ARROW) {
        e.preventDefault();
        _this.setState({
          selectedIndex: selectedIndex <= 0 ? suggestions.length - 1 : selectedIndex - 1,
          selectionMode: true
        });
      }

      if (e.keyCode === _keys2.default.DOWN_ARROW) {
        e.preventDefault();
        _this.setState({
          selectedIndex: suggestions.length === 0 ? -1 : (selectedIndex + 1) % suggestions.length,
          selectionMode: true
        });
      }
    };

    _this.handleFocus = function () {
      _this.setState({
        isFocused: true
      });
    };

    _this.handleBlur = function () {
      _this.setState({
        isFocused: false
      });
    };

    _this.handleTagsChange = function (tags) {
      _this.props.onChange(tags);
    };

    _this.handleWrapperElementOnClick = function (e) {
      if (e.target === _this.wrapperElement) {
        _this.textInput.focus();
      }
    };

    _this.handleSuggestionClick = function (i) {
      _this.addTag(_this.state.suggestions[i]);
    };

    _this.handleExistingsTagClick = function (i) {
      _this.addTag(_this.getFilteredExistingsTags()[i]);
    };

    _this.renderTags = function () {
      var tags = _this.state.tags;


      return tags.map(function (tag) {
        var name = _this.getTagName(tag);
        return _react2.default.createElement(_Tag2.default, {
          key: name,
          name: name,
          onRemoveClick: function onRemoveClick() {
            _this.removeTag(name);
          }
        });
      });
    };

    _this.state = {
      query: '',
      isFocused: false,
      selectedIndex: -1,
      selectionMode: false,
      suggestions: [],
      tags: _this.props.tags
    };
    return _this;
  }

  _createClass(TagInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          query = _state.query,
          suggestions = _state.suggestions,
          selectedIndex = _state.selectedIndex,
          isFocused = _state.isFocused;
      var _props = this.props,
          label = _props.label,
          id = _props.id;

      var wrapperClassNames = (0, _classnames2.default)('tag-input', { focused: isFocused });

      /* eslint-disable jsx-a11y/click-events-have-key-events */
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      /* eslint-disable jsx-a11y/label-has-for */
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: id, className: 'jsx-' + _styles3.label.__scopedHash
          },
          label,
          _react2.default.createElement(_style2.default, {
            styleId: _styles3.label.__scopedHash,
            css: _styles3.label.__scoped
          })
        ),
        _react2.default.createElement(
          'div',
          {
            ref: function ref(wrapper) {
              _this2.wrapperElement = wrapper;
            },
            onClick: this.handleWrapperElementOnClick,
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + (wrapperClassNames || '')
          },
          _react2.default.createElement(
            'ul',
            {
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'tag-input__tag-list'
            },
            _react2.default.createElement(_ExistingTags2.default, {
              existingTags: this.getFilteredExistingsTags(),
              handleClick: this.handleExistingsTagClick
            }),
            this.renderTags()
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'tag-input__input'
            },
            _react2.default.createElement('input', {
              id: id,
              type: 'text',
              ref: function ref(input) {
                _this2.textInput = input;
              },
              value: query,
              onChange: this.handleInputChange,
              onKeyDown: this.handleInputKeyDown,
              onFocus: this.handleFocus,
              onBlur: this.handleBlur,
              className: 'jsx-' + _styles2.default.__scopedHash
            }),
            _react2.default.createElement(_Suggestions2.default, {
              isFocused: isFocused,
              selected: selectedIndex,
              handleClick: this.handleSuggestionClick,
              items: suggestions
            })
          ),
          _react2.default.createElement(_style2.default, {
            styleId: _styles2.default.__scopedHash,
            css: _styles2.default.__scoped
          })
        )
      );
    }
  }]);

  return TagInput;
}(_react.Component);

exports.default = TagInput;


TagInput.propTypes = {
  id: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  tags: _propTypes2.default.array,
  tagNameProp: _propTypes2.default.string,
  tagCreate: _propTypes2.default.func,
  suggestions: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.array]),
  suggestionsDelay: _propTypes2.default.number,
  existingTags: _propTypes2.default.array,
  onChange: _propTypes2.default.func,
  delimiters: _propTypes2.default.array,
  minQueryLength: _propTypes2.default.number
};

TagInput.defaultProps = {
  tags: [],
  tagNameProp: 'name',
  tagCreate: function tagCreate(name) {
    return name;
  },

  suggestions: [],
  suggestionsDelay: 0,
  existingTags: [],
  onChange: function onChange() {},

  delimiters: [_keys2.default.ENTER, _keys2.default.TAB],
  minQueryLength: 1
};