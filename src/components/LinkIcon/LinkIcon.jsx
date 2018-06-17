import React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { withAccessibleFocusStyle } from '../../utils';

const IconWrapper = styled(withAccessibleFocusStyle(Flex))`
  font-size: 64px;
  margin: 24px;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
    color: pink;
  }
`;

const LinkIcon = ({ title, link, icon }) => (
  <IconWrapper
    title={title}
    onClick={() => { window.location.href = link }}
    is="button"
    role="link"
    aria-label={title}
    tabIndex={0}
  >
    {icon}
  </IconWrapper>
)

export default LinkIcon;
