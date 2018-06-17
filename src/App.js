import React from 'react';
import { AccessibilityProvider } from './utils';
import Routes from './routes';

export default class App extends React.Component {
  render() {
    return (
      <AccessibilityProvider>
        <Routes />
      </AccessibilityProvider>
    );
  }
}