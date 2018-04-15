'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styleHelper = require('../../utils/style-helper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _defaultExport = ['.videoPlayer_container{position:absolute;}', '.videoPlayer_controls{position:absolute;bottom:-10px;height:40px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;z-index:2147483648;}', 'button{margin:0 3px 10px 0;padding-left:2px;padding-right:2px;width:99px;}', 'video{width:100%;vertical-align:top;object-fit:fill;}', '.fullscreen_button{position:absolute;top:15px;right:15px;margin:0;}', '.playPause_button{position:absolute;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', 'video::-webkit-media-controls-overlay-enclosure{display:none !important;}', 'video::-webkit-media-controls-enclosure{display:none !important;}', 'video::-webkit-media-controls{display:none !important;}', 'video::-webkit-media-controls-panel{display:none !important;}', 'video::-webkit-media-controls-play-button{display:none !important;}', 'video::-webkit-media-controls-current-time-display{display:none !important;}', 'video::-webkit-media-controls-time-remaining-display{display:none !important;}', 'video::-webkit-media-controls-timeline{display:none !important;}', 'video::-webkit-media-controls-mute-button{display:none !important;}', 'video::-webkit-media-controls-volume-slider{display:none !important;}', 'video::-webkit-media-controls-fullscreen-button{display:none !important;}', 'video::-internal-media-controls-download-button{display:none !important;}', '*::-moz-list-bullet,*::-moz-list-number{display:none !important;}', '*::-moz-meter-bar{display:none !important;}', ':-moz-full-screen:not(:root)::backdrop{display:none !important;}', '*::backdrop{display:none !important;}', ':fullscreen:not(:root){display:none !important;}', 'video::-webkit-media-controls-enclosure{display:none !important;}', '@media screen and (max-width:500px){button{font-size:0.8em;width:calc(33% - 5px);}}', '@media screen and (max-width:720px){video{height:calc((50vw - 48px) * 3 / 4);margin:0 10px 10px 0;width:calc(50vw - 48px);}}'];
_defaultExport.__hash = '129070549';
_defaultExport.__scoped = ['.videoPlayer_container.jsx-1738310100{position:absolute;}', '.videoPlayer_controls.jsx-1738310100{position:absolute;bottom:-10px;height:40px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;z-index:2147483648;}', 'button.jsx-1738310100{margin:0 3px 10px 0;padding-left:2px;padding-right:2px;width:99px;}', 'video.jsx-1738310100{width:100%;vertical-align:top;object-fit:fill;}', '.fullscreen_button.jsx-1738310100{position:absolute;top:15px;right:15px;margin:0;}', '.playPause_button.jsx-1738310100{position:absolute;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', 'video.jsx-1738310100::-webkit-media-controls-overlay-enclosure{display:none !important;}', 'video.jsx-1738310100::-webkit-media-controls-enclosure{display:none !important;}', 'video.jsx-1738310100::-webkit-media-controls{display:none !important;}', 'video.jsx-1738310100::-webkit-media-controls-panel{display:none !important;}', 'video.jsx-1738310100::-webkit-media-controls-play-button{display:none !important;}', 'video.jsx-1738310100::-webkit-media-controls-current-time-display{display:none !important;}', 'video.jsx-1738310100::-webkit-media-controls-time-remaining-display{display:none !important;}', 'video.jsx-1738310100::-webkit-media-controls-timeline{display:none !important;}', 'video.jsx-1738310100::-webkit-media-controls-mute-button{display:none !important;}', 'video.jsx-1738310100::-webkit-media-controls-volume-slider{display:none !important;}', 'video.jsx-1738310100::-webkit-media-controls-fullscreen-button{display:none !important;}', 'video.jsx-1738310100::-internal-media-controls-download-button{display:none !important;}', '*.jsx-1738310100::-moz-list-bullet,*.jsx-1738310100::-moz-list-number{display:none !important;}', '*.jsx-1738310100::-moz-meter-bar{display:none !important;}', '.jsx-1738310100:-moz-full-screen:not(:root)::backdrop{display:none !important;}', '*.jsx-1738310100::backdrop{display:none !important;}', '.jsx-1738310100:fullscreen:not(:root){display:none !important;}', 'video.jsx-1738310100::-webkit-media-controls-enclosure{display:none !important;}', '@media screen and (max-width:500px){button.jsx-1738310100{font-size:0.8em;width:calc(33% - 5px);}}', '@media screen and (max-width:720px){video.jsx-1738310100{height:calc((50vw - 48px) * 3 / 4);margin:0 10px 10px 0;width:calc(50vw - 48px);}}'];
_defaultExport.__scopedHash = '1738310100';
exports.default = _defaultExport;