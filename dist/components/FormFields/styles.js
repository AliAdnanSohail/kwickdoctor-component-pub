'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldset = exports.textInput = exports.label = exports.error = undefined;

var _styleHelper = require('../../utils/style-helper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _defaultExport = ['.form-field{position:relative;}'];
_defaultExport.__hash = '321669105';
_defaultExport.__scoped = ['.form-field.jsx-1685083184{position:relative;}'];
_defaultExport.__scopedHash = '1685083184';
exports.default = _defaultExport;
var error = exports.error = ['.error{position:absolute;left:16px;width:auto;max-width:calc(100% - 32px);box-sizing:border-box;word-wrap:break-word;padding:12px 16px;margin-top:-6px;border-radius:3px;background-color:#ffffff;box-shadow:0 2px 40px 0 rgba(0,0,0,0.05);color:' + _styleHelper2.default.errorColor + ';z-index:999;font-size:0.875rem;font-weight:500;}', '.error:before{content:\'\';position:absolute;top:0;left:32px;width:0;height:0;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);box-sizing:border-box;box-shadow:-4px 4px 14px 0 rgba(0,0,0,0.05);border-width:6px;border-style:solid;border-color:transparent transparent #ffffff #ffffff;}'];

error.__hash = '1201276180';
error.__scoped = ['.error.jsx-2881818901{position:absolute;left:16px;width:auto;max-width:calc(100% - 32px);box-sizing:border-box;word-wrap:break-word;padding:12px 16px;margin-top:-6px;border-radius:3px;background-color:#ffffff;box-shadow:0 2px 40px 0 rgba(0,0,0,0.05);color:' + _styleHelper2.default.errorColor + ';z-index:999;font-size:0.875rem;font-weight:500;}', '.error.jsx-2881818901:before{content:\'\';position:absolute;top:0;left:32px;width:0;height:0;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);box-sizing:border-box;box-shadow:-4px 4px 14px 0 rgba(0,0,0,0.05);border-width:6px;border-style:solid;border-color:transparent transparent #ffffff #ffffff;}'];
error.__scopedHash = '2881818901';
var label = exports.label = ['label,legend{color:' + _styleHelper2.default.textColor + ';display:inline-block;margin-bottom:6px;font-weight:500;font-size:1rem;}'];

label.__hash = '1582438527';
label.__scoped = ['label.jsx-4038665278,legend.jsx-4038665278{color:' + _styleHelper2.default.textColor + ';display:inline-block;margin-bottom:6px;font-weight:500;font-size:1rem;}'];
label.__scopedHash = '4038665278';
var textInput = exports.textInput = ['input,textarea,select{width:100%;min-width:100%;max-width:100%;min-height:44px;padding:12px 16px;background-color:#ffffff;color:' + _styleHelper2.default.textColor + ';box-sizing:border-box;-webkit-appearance:none;font-style:normal;font-weight:normal;font-size:0.875rem;border-width:2px;border-style:solid;border-color:' + _styleHelper2.default.borderColor + ';border-radius:4px;}', 'input::-webkit-input-placeholder,textarea::-webkit-input-placeholder,select::-webkit-input-placeholder{color:' + _styleHelper2.default.placeholderColor + ';}', 'input::-moz-placeholder,textarea::-moz-placeholder,select::-moz-placeholder{color:' + _styleHelper2.default.placeholderColor + ';}', 'input:-ms-input-placeholder,textarea:-ms-input-placeholder,select:-ms-input-placeholder{color:' + _styleHelper2.default.placeholderColor + ';}', 'input:-moz-placeholder,textarea:-moz-placeholder,select:-moz-placeholder{color:' + _styleHelper2.default.placeholderColor + ';}', 'input:focus,textarea:focus,select:focus{outline:none;padding:12px 16px;border-color:' + _styleHelper2.default.primaryColor + ';}', 'input.invalid,input.invalid:focus,textarea.invalid,textarea.invalid:focus,select.invalid,select.invalid:focus{border-color:' + _styleHelper2.default.errorColor + ';}'];

textInput.__hash = '279718968';
textInput.__scoped = ['input.jsx-3428902777,textarea.jsx-3428902777,select.jsx-3428902777{width:100%;min-width:100%;max-width:100%;min-height:44px;padding:12px 16px;background-color:#ffffff;color:' + _styleHelper2.default.textColor + ';box-sizing:border-box;-webkit-appearance:none;font-style:normal;font-weight:normal;font-size:0.875rem;border-width:2px;border-style:solid;border-color:' + _styleHelper2.default.borderColor + ';border-radius:4px;}', 'input.jsx-3428902777::-webkit-input-placeholder,textarea.jsx-3428902777::-webkit-input-placeholder,select.jsx-3428902777::-webkit-input-placeholder{color:' + _styleHelper2.default.placeholderColor + ';}', 'input.jsx-3428902777::-moz-placeholder,textarea.jsx-3428902777::-moz-placeholder,select.jsx-3428902777::-moz-placeholder{color:' + _styleHelper2.default.placeholderColor + ';}', 'input.jsx-3428902777:-ms-input-placeholder,textarea.jsx-3428902777:-ms-input-placeholder,select.jsx-3428902777:-ms-input-placeholder{color:' + _styleHelper2.default.placeholderColor + ';}', 'input.jsx-3428902777:-moz-placeholder,textarea.jsx-3428902777:-moz-placeholder,select.jsx-3428902777:-moz-placeholder{color:' + _styleHelper2.default.placeholderColor + ';}', 'input.jsx-3428902777:focus,textarea.jsx-3428902777:focus,select.jsx-3428902777:focus{outline:none;padding:12px 16px;border-color:' + _styleHelper2.default.primaryColor + ';}', 'input.invalid.jsx-3428902777,input.invalid.jsx-3428902777:focus,textarea.invalid.jsx-3428902777,textarea.invalid.jsx-3428902777:focus,select.invalid.jsx-3428902777,select.invalid.jsx-3428902777:focus{border-color:' + _styleHelper2.default.errorColor + ';}'];
textInput.__scopedHash = '3428902777';
var fieldset = exports.fieldset = ['fieldset{margin:0;border:none;}', 'fieldset label{margin-bottom:0;}'];
fieldset.__hash = '977507091';
fieldset.__scoped = ['fieldset.jsx-904933394{margin:0;border:none;}', 'fieldset.jsx-904933394 label.jsx-904933394{margin-bottom:0;}'];
fieldset.__scopedHash = '904933394';