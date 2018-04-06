import { EventEmitter } from 'events';
import createUUID from './../create-UUID';

class Manager extends EventEmitter {
  constructor() {
    super();
    this.listToasts = [];
  }

  create(toast) {
    const defaultToast = {
      id: createUUID(),
      content: '',
      primary: false,
      boxstyle: 'rectangle-22',
      onHideClick() {},
      timeOut: 5000,
    };
    if (toast.priority) {
      this.listToasts.unshift(Object.assign(defaultToast, toast));
    } else {
      this.listToasts.push(Object.assign(defaultToast, toast));
    }
    this.emitChange();
  }

  remove(id) {
    this.listToasts = this.listToasts.filter(n => id !== n.id);
    this.emitChange();
  }

  emitChange() {
    this.emit('change', this.listToasts);
  }

  addChangeListener(callback) {
    this.addListener('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

export default new Manager();
