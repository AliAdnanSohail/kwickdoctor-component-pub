'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoPlayer = undefined;

require('video-react/dist/video-react.css');

var _styleHelper = require('../../utils/style-helper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _defaultExport = ['.video-player-container{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:hidden;width:100%;min-height:480px;background-color:' + _styleHelper2.default.borderColor + ';}', '@media (min-width:700px){.video-player-container{width:640px;}}'];
_defaultExport.__hash = '961380666';
_defaultExport.__scoped = ['.video-player-container.jsx-1622707451{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:hidden;width:100%;min-height:480px;background-color:' + _styleHelper2.default.borderColor + ';}', '@media (min-width:700px){.video-player-container.jsx-1622707451{width:640px;}}'];
_defaultExport.__scopedHash = '1622707451';
exports.default = _defaultExport;
var videoPlayer = exports.videoPlayer = ['.video-player:hover .video-player__big-play-button.video-react-big-play-button{background-color:rgba(255,255,255,0.4);}', '.video-player__big-play-button.video-react-big-play-button{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:76px;height:76px;padding:0;margin-top:-38px;margin-left:-38px;border-width:0;border-radius:50%;background-color:rgba(255,255,255,0.4);cursor:pointer;}', '.video-player__big-play-button.video-react-big-play-button:focus{outline:none;}', '.video-player__big-play-button.video-react-big-play-button:before{font-size:3rem;color:#ffffff;position:static;}', '.video-player__control-bar.video-react-control-bar{position:static;height:0;}', '.video-player__progress.video-react-progress-control{position:absolute;bottom:30px;left:50%;height:30px;width:300px;margin-left:-150px;}', '.video-player__progress.video-react-progress-control .video-react-load-progress,.video-player__progress.video-react-progress-control .video-react-progress-holder{height:3px;border-radius:3px;}', '.video-player__progress.video-react-progress-control .video-react-progress-holder .video-react-play-progress{border-radius:3px;}', '.video-player__fullscreen-button.video-react-fullscreen-control{position:absolute;top:24px;right:24px;height:30px;padding:6px 12px;background-color:rgba(42,42,48,0.5);border-radius:6px;}'];
videoPlayer.__hash = '1925825400';
videoPlayer.__scoped = ['.video-player.jsx-527564857:hover .video-player__big-play-button.video-react-big-play-button.jsx-527564857{background-color:rgba(255,255,255,0.4);}', '.video-player__big-play-button.video-react-big-play-button.jsx-527564857{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:76px;height:76px;padding:0;margin-top:-38px;margin-left:-38px;border-width:0;border-radius:50%;background-color:rgba(255,255,255,0.4);cursor:pointer;}', '.video-player__big-play-button.video-react-big-play-button.jsx-527564857:focus{outline:none;}', '.video-player__big-play-button.video-react-big-play-button.jsx-527564857:before{font-size:3rem;color:#ffffff;position:static;}', '.video-player__control-bar.video-react-control-bar.jsx-527564857{position:static;height:0;}', '.video-player__progress.video-react-progress-control.jsx-527564857{position:absolute;bottom:30px;left:50%;height:30px;width:300px;margin-left:-150px;}', '.video-player__progress.video-react-progress-control.jsx-527564857 .video-react-load-progress.jsx-527564857,.video-player__progress.video-react-progress-control.jsx-527564857 .video-react-progress-holder.jsx-527564857{height:3px;border-radius:3px;}', '.video-player__progress.video-react-progress-control.jsx-527564857 .video-react-progress-holder.jsx-527564857 .video-react-play-progress.jsx-527564857{border-radius:3px;}', '.video-player__fullscreen-button.video-react-fullscreen-control.jsx-527564857{position:absolute;top:24px;right:24px;height:30px;padding:6px 12px;background-color:rgba(42,42,48,0.5);border-radius:6px;}'];
videoPlayer.__scopedHash = '527564857';