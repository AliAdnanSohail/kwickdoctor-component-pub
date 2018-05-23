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

var _entry = require('react-pdf/dist/entry.webpack');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function FileExtension(filename) {
  // rocket jump : all files which are not pdf renders as image
  return (/[^.]+$/.exec(filename).toString() === 'pdf'
  );
}

var FileViewer = function (_Component) {
  _inherits(FileViewer, _Component);

  function FileViewer(props) {
    _classCallCheck(this, FileViewer);

    var _this = _possibleConstructorReturn(this, (FileViewer.__proto__ || Object.getPrototypeOf(FileViewer)).call(this, props));

    _this.onDocumentLoad = function (_ref) {
      var numPages = _ref.numPages;

      _this.setState({ numPages: numPages });
    };

    _this.state = { isPdf: FileExtension(props.file.src), file: props.file.src, numPages: null };
    return _this;
  }

  _createClass(FileViewer, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          file = _state.file,
          numPages = _state.numPages;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        this.state.isPdf ? _react2.default.createElement(
          _entry.Document,
          { file: file, onLoadSuccess: this.onDocumentLoad },
          Array.from(new Array(numPages), function (el, index) {
            return _react2.default.createElement(_entry.Page, { key: 'page_' + (index + 1), pageNumber: index + 1 });
          })
        ) : _react2.default.createElement('img', { src: file.src, alt: 'This document can\'t be displayed', className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'image'
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return FileViewer;
}(_react.Component);

exports.default = FileViewer;


FileViewer.propTypes = {
  file: _propTypes2.default.object.isRequired
};