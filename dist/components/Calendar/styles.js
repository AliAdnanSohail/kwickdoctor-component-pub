'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calendar = exports.navigation = exports.header = undefined;

var _styleHelper = require('../../utils/style-helper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header = exports.header = ['.weekdays{padding:0;margin:0;list-style:none;font-size:0.745rem;}', '.weekdays__item{width:14.2857143%;height:80px;float:left;line-height:80px;color:#bbbccd;font-weight:300;text-align:center;text-transform:uppercase;}'];

header.__hash = '2535097147';
header.__scoped = ['.weekdays.jsx-1635075834{padding:0;margin:0;list-style:none;font-size:0.745rem;}', '.weekdays__item.jsx-1635075834{width:14.2857143%;height:80px;float:left;line-height:80px;color:#bbbccd;font-weight:300;text-align:center;text-transform:uppercase;}'];
header.__scopedHash = '1635075834';
var navigation = exports.navigation = ['.navigation{margin-bottom:15px;position:relative;}', '.navigation__month{text-align:center;font-weight:bold;font-size:1.1rem;padding-top:5px;}', '.navigation__month span{display:inline-block;padding:0 7px;}', '.navigation button{border:none;margin:0;padding:0;width:95px;background:transparent;outline:none;cursor:pointer;position:absolute;left:0;top:0;}', '.navigation button.next{left:auto;right:0;}', '.navigation button svg{width:14px !important;height:14px !important;}'];

navigation.__hash = '1481994011';
navigation.__scoped = ['.navigation.jsx-3089003290{margin-bottom:15px;position:relative;}', '.navigation__month.jsx-3089003290{text-align:center;font-weight:bold;font-size:1.1rem;padding-top:5px;}', '.navigation__month.jsx-3089003290 span.jsx-3089003290{display:inline-block;padding:0 7px;}', '.navigation.jsx-3089003290 button.jsx-3089003290{border:none;margin:0;padding:0;width:95px;background:transparent;outline:none;cursor:pointer;position:absolute;left:0;top:0;}', '.navigation.jsx-3089003290 button.next.jsx-3089003290{left:auto;right:0;}', '.navigation.jsx-3089003290 button.jsx-3089003290 svg.jsx-3089003290{width:14px !important;height:14px !important;}'];
navigation.__scopedHash = '3089003290';
var calendar = exports.calendar = ['.calendar{max-width:665px;color:' + _styleHelper2.default.textColor + ';}'];
calendar.__hash = '3347227063';
calendar.__scoped = ['.calendar.jsx-3268505078{max-width:665px;color:' + _styleHelper2.default.textColor + ';}'];
calendar.__scopedHash = '3268505078';