'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styleHelper = require('../../utils/style-helper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _defaultExport = ['.loader{position:relative;margin:0px auto;width:100px;height:100px;zoom:1;}', '.circular{-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;height:100px;position:relative;width:100px;}', '.path{stroke:' + _styleHelper2.default.primaryColor + ';stroke-dasharray:1,200;stroke-dashoffset:0;-webkit-animation:dash 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite;stroke-linecap:round;}', '@-webkit-keyframes rotate{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}', '@keyframes rotate{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}', '@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0;}50%{stroke-dasharray:89,200;stroke-dashoffset:-35;}100%{stroke-dasharray:89,200;stroke-dashoffset:-124;}}', '@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0;}50%{stroke-dasharray:89,200;stroke-dashoffset:-35;}100%{stroke-dasharray:89,200;stroke-dashoffset:-124;}}'];
_defaultExport.__hash = '2505431476';
_defaultExport.__scoped = ['.loader.jsx-1462383989{position:relative;margin:0px auto;width:100px;height:100px;zoom:1;}', '.circular.jsx-1462383989{-webkit-animation:rotate-jsx-1462383989 1s linear infinite;animation:rotate-jsx-1462383989 1s linear infinite;height:100px;position:relative;width:100px;}', '.path.jsx-1462383989{stroke:' + _styleHelper2.default.primaryColor + ';stroke-dasharray:1,200;stroke-dashoffset:0;-webkit-animation:dash-jsx-1462383989 1.5s ease-in-out infinite;animation:dash-jsx-1462383989 1.5s ease-in-out infinite;stroke-linecap:round;}', '@-webkit-keyframes rotate-jsx-1462383989{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}', '@keyframes rotate-jsx-1462383989{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}', '@-webkit-keyframes dash-jsx-1462383989{0%{stroke-dasharray:1,200;stroke-dashoffset:0;}50%{stroke-dasharray:89,200;stroke-dashoffset:-35;}100%{stroke-dasharray:89,200;stroke-dashoffset:-124;}}', '@keyframes dash-jsx-1462383989{0%{stroke-dasharray:1,200;stroke-dashoffset:0;}50%{stroke-dasharray:89,200;stroke-dashoffset:-35;}100%{stroke-dasharray:89,200;stroke-dashoffset:-124;}}'];
_defaultExport.__scopedHash = '1462383989';
exports.default = _defaultExport;