import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const withAccessibleFocusStyle = (Component, focusSelector = '') => {
  const StyledComponent = styled(
    ({ isKeyboardUser, ...props }) => (
      <Component {...props} />
    ),
  )`
    ${({ isKeyboardUser }) =>
      isKeyboardUser &&
      css`
        :focus ${focusSelector} {
          ${
        css`
            position: relative;
          `};
          outline: none;
          overflow: visible;
          ::after {
            content: ' ';
            display: block;
            position: absolute;
            top: -0.5rem;
            bottom: -0.5rem;
            left: -0.5rem;
            right: -0.5rem;
            outline: 10px dotted black !important;
            transform: translateZ(0);
            z-index: 9999;
            pointer-events: none;
          }
        }
      `};
  `;

  class SubscribedComponent extends React.Component {
    componentDidMount() {
      if (this.context.accessibilityStore) {
        this.unsubscribe = this.context.accessibilityStore.subscribe(() => this.forceUpdate());
      }
    }

    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }

    render() {
      const { ...rest } = this.props;
      const isKeyboardUser = this.context.accessibilityStore && this.context.accessibilityStore.isKeyboardUser;
      return (
        <StyledComponent isKeyboardUser={isKeyboardUser} {...rest} />
      );
    }
  }

  SubscribedComponent.contextTypes = {
    ...Component.contextTypes,
    accessibilityStore: PropTypes.object,
  };

  return SubscribedComponent;
};
