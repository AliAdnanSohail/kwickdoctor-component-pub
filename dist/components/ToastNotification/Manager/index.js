'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createUUID = function createUUID() {
  var pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0; // eslint-disable-line no-bitwise
    var v = c === 'x' ? r : r & 0x3 | 0x8; // eslint-disable-line no-bitwise
    return v.toString(16);
  });
};

var Manager = function (_EventEmitter) {
  _inherits(Manager, _EventEmitter);

  function Manager() {
    _classCallCheck(this, Manager);

    var _this = _possibleConstructorReturn(this, (Manager.__proto__ || Object.getPrototypeOf(Manager)).call(this));

    _this.listToasts = [];
    return _this;
  }

  _createClass(Manager, [{
    key: 'create',
    value: function create(toast) {
      var defaultToast = {
        id: createUUID(),
        content: '',
        primary: false,
        boxstyle: 'rectangle-22',
        onHideClick: function onHideClick() {},

        timeOut: 5000
      };
      if (toast.priority) {
        this.listToasts.unshift(Object.assign(defaultToast, toast));
      } else {
        this.listToasts.push(Object.assign(defaultToast, toast));
      }
      this.emitChange();
    }
  }, {
    key: 'remove',
    value: function remove(id) {
      this.listToasts = this.listToasts.filter(function (n) {
        return id !== n.id;
      });
      this.emitChange();
    }
  }, {
    key: 'emitChange',
    value: function emitChange() {
      this.emit('change', this.listToasts);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(callback) {
      this.addListener('change', callback);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(callback) {
      this.removeListener('change', callback);
    }
  }]);

  return Manager;
}(_events.EventEmitter);

exports.default = new Manager();