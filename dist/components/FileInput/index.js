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

var FileInput = function (_Component) {
  _inherits(FileInput, _Component);

  function FileInput(props) {
    _classCallCheck(this, FileInput);

    var _this = _possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).call(this, props));

    _this.state = { showFile: false };
    return _this;
  }

  _createClass(FileInput, [{
    key: 'handleFile',
    value: function handleFile() {
      this.setState({ showFile: true });
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove() {
      this.setState({ showFile: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          name = _props.name,
          message = _props.message;


      if (!this.state.showFile) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          { key: id },
          _react2.default.createElement('input', {
            type: 'file',
            name: name,
            id: id,

            ref: function ref(input) {
              _this2.fileUpload = input;
            },
            onChange: function onChange(e) {
              return _this2.handleFile(e);
            },
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'inputFile'
          }),
          _react2.default.createElement(
            'label',
            { htmlFor: id, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'upload-license-copy'
            },
            _react2.default.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '20',
                height: '17',
                viewBox: '0 0 20 17',
                fill: '#4695ef',
                className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'icon-upload'
              },
              _react2.default.createElement('path', { d: 'M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z', className: 'jsx-' + _styles2.default.__scopedHash
              })
            ),
            _react2.default.createElement(
              'span',
              {
                className: 'jsx-' + _styles2.default.__scopedHash
              },
              message
            )
          ),
          _react2.default.createElement(_style2.default, {
            styleId: _styles2.default.__scopedHash,
            css: _styles2.default.__scoped
          })
        );
      }
      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'box'
        },
        _react2.default.createElement('input', {
          type: 'file',
          name: name,
          id: id,

          ref: function ref(input) {
            _this2.fileUpload = input;
          },
          onChange: function onChange(e) {
            return _this2.handleFile(e);
          },
          className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'inputFile'
        }),
        _react2.default.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '22',
            height: '22',
            viewBox: '0 0 22 22',
            fill: '#4695ef',
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'icon-board'
          },
          _react2.default.createElement('path', { d: 'M3.5,3.5 C2.94771525,3.5 2.5,3.94771525 2.5,4.5 L2.5,17.5 C2.5,18.0522847 2.94771525,18.5 3.5,18.5 L15.5,18.5 C16.0522847,18.5 16.5,18.0522847 16.5,17.5 L16.5,4.5 C16.5,3.94771525 16.0522847,3.5 15.5,3.5 L3.5,3.5 Z M3.5,1.5 L15.5,1.5 C17.1568542,1.5 18.5,2.84314575 18.5,4.5 L18.5,17.5 C18.5,19.1568542 17.1568542,20.5 15.5,20.5 L3.5,20.5 C1.84314575,20.5 0.5,19.1568542 0.5,17.5 L0.5,4.5 C0.5,2.84314575 1.84314575,1.5 3.5,1.5 Z M7,0.5 L12,0.5 C12.8284271,0.5 13.5,1.17157288 13.5,2 L13.5,4 C13.5,4.82842712 12.8284271,5.5 12,5.5 L7,5.5 C6.17157288,5.5 5.5,4.82842712 5.5,4 L5.5,2 C5.5,1.17157288 6.17157288,0.5 7,0.5 Z M6.9761486,10.5542814 C6.63845919,10.2324554 6.09095647,10.2324554 5.75326706,10.5542814 C5.41557765,10.8761075 5.41557765,11.3978906 5.75326706,11.7197167 L8.67059538,14.5 L13.2467329,10.192519 C13.5844224,9.87069299 13.5844224,9.34890987 13.2467329,9.02708382 C12.9090435,8.70525777 12.3615408,8.70525777 12.0238514,9.02708382 L8.67059538,12.1691296 L6.9761486,10.5542814 Z', className: 'jsx-' + _styles2.default.__scopedHash
          })
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: id, className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'filename'
          },
          _react2.default.createElement(
            'span',
            {
              className: 'jsx-' + _styles2.default.__scopedHash
            },
            this.fileUpload.files[0].name
          )
        ),
        _react2.default.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '10',
            height: '10',
            viewBox: '0 0 11 11',
            fill: '#DCDCE4',
            onClick: function onClick(e) {
              return _this2.handleRemove(e);
            },
            className: 'jsx-' + _styles2.default.__scopedHash + ' ' + 'icon-remove'
          },
          _react2.default.createElement('path', { d: 'M8.62132034,6.5 L12.5104076,2.6109127 C13.0961941,2.02512627 13.0961941,1.0753788 12.5104076,0.48959236 C11.9246212,-0.0961940777 10.9748737,-0.0961940777 10.3890873,0.48959236 L6.5,4.37867966 L2.6109127,0.48959236 C2.02512627,-0.0961940777 1.0753788,-0.0961940777 0.48959236,0.48959236 C-0.0961940777,1.0753788 -0.0961940777,2.02512627 0.48959236,2.6109127 L4.37867966,6.5 L0.48959236,10.3890873 C-0.0961940777,10.9748737 -0.0961940777,11.9246212 0.48959236,12.5104076 C1.0753788,13.0961941 2.02512627,13.0961941 2.6109127,12.5104076 L6.5,8.62132034 L10.3890873,12.5104076 C10.9748737,13.0961941 11.9246212,13.0961941 12.5104076,12.5104076 C13.0961941,11.9246212 13.0961941,10.9748737 12.5104076,10.3890873 L8.62132034,6.5 Z', className: 'jsx-' + _styles2.default.__scopedHash
          }),
          ' '
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _styles2.default.__scopedHash,
          css: _styles2.default.__scoped
        })
      );
    }
  }]);

  return FileInput;
}(_react.Component);

exports.default = FileInput;


FileInput.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string,
  message: _propTypes2.default.string
};

FileInput.defaultProps = {
  name: '',
  message: 'Upload file'
};