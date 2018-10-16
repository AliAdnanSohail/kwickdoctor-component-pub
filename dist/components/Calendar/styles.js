'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calendar = exports.navigation = exports.header = undefined;

var _styleHelper = require('../../utils/style-helper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header = exports.header = ['.weekdays{padding:0;margin:0;list-style:none;font-size:0.745rem;}', '.weekdays__item{width:14.2857143%;height:80px;float:left;line-height:80px;color:#bbbccd;font-weight:300;text-align:center;text-transform:uppercase;}', '@media all and (max-width:630px){.weekdays__item{height:40px;line-height:40px;}}'];

header.__hash = '338820720';
header.__scoped = ['.weekdays.jsx-3590812337{padding:0;margin:0;list-style:none;font-size:0.745rem;}', '.weekdays__item.jsx-3590812337{width:14.2857143%;height:80px;float:left;line-height:80px;color:#bbbccd;font-weight:300;text-align:center;text-transform:uppercase;}', '@media all and (max-width:630px){.weekdays__item.jsx-3590812337{height:40px;line-height:40px;}}'];
header.__scopedHash = '3590812337';
var navigation = exports.navigation = ['.navigation{margin-bottom:15px;position:relative;}', '.navigation__month{text-align:center;font-weight:bold;font-size:1.1rem;padding-top:5px;}', '.navigation__month span{display:inline-block;padding:0 7px;}', '.navigation button{position:absolute;left:0;top:0;border:none;margin:0;padding:0;width:95px;background:transparent;outline:none;cursor:pointer;font-size:1.1rem;}', '.navigation button.next{left:auto;right:0;}', '.navigation button i{color:#666666;}'];

navigation.__hash = '179121018';
navigation.__scoped = ['.navigation.jsx-1620799419{margin-bottom:15px;position:relative;}', '.navigation__month.jsx-1620799419{text-align:center;font-weight:bold;font-size:1.1rem;padding-top:5px;}', '.navigation__month.jsx-1620799419 span.jsx-1620799419{display:inline-block;padding:0 7px;}', '.navigation.jsx-1620799419 button.jsx-1620799419{position:absolute;left:0;top:0;border:none;margin:0;padding:0;width:95px;background:transparent;outline:none;cursor:pointer;font-size:1.1rem;}', '.navigation.jsx-1620799419 button.next.jsx-1620799419{left:auto;right:0;}', '.navigation.jsx-1620799419 button.jsx-1620799419 i.jsx-1620799419{color:#666666;}'];
navigation.__scopedHash = '1620799419';
var calendar = exports.calendar = ['.calendar{max-width:665px;color:' + _styleHelper2.default.textColor + ';}'];
calendar.__hash = '3347227063';
calendar.__scoped = ['.calendar.jsx-3268505078{max-width:665px;color:' + _styleHelper2.default.textColor + ';}'];
calendar.__scopedHash = '3268505078';