export class AccessibilityStore {
  constructor() {
    this.subscribers = [];
    this.isKeyboardUser = false;
  }

  subscribe = listener => {
    this.subscribers.push(listener);
    return () => {
      this.subscribers.splice(this.subscribers.indexOf(listener), 1);
    };
  }

  setKeyboardUser(value) {
    this.isKeyboardUser = value;
    this.subscribers.forEach(fn => fn());
  }
}
