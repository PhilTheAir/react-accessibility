import React from 'react';
import PropTypes from 'prop-types';
import { AccessibilityStore } from './accessibility-store';

export class AccessibilityProvider extends React.Component {
  constructor(props) {
    super(props);
    this.accessibilityStore = new AccessibilityStore();
  }

  getChildContext() {
    return {
      accessibilityStore: this.accessibilityStore,
    };
  }

  keyboardListener = ev => {
    if (ev.keyCode === 9) {
      this.accessibilityStore.setKeyboardUser(true);
      document.removeEventListener('keydown', this.keyboardListener);
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyboardListener);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyboardListener);
  }

  render() {
    return this.props.children;
  }
}

AccessibilityProvider.childContextTypes = {
  accessibilityStore: PropTypes.object,
};
