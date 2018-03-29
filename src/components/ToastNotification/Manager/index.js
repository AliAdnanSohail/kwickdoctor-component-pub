import { EventEmitter } from 'events';

const createUUID = () => {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0; // eslint-disable-line no-bitwise
    const v = c === 'x' ? r : ((r & 0x3) | 0x8); // eslint-disable-line no-bitwise
    return v.toString(16);
  });
};

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
    if (!toast.priority) {
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
