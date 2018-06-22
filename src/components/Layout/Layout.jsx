import React, { Fragment } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

export const PageWrapper = styled(Flex)`
  flex-direction: row;
`;

export const Page = styled(Flex)`
  min-height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

export const StyledHeader = styled.header`
  height: 10vh;
  border-bottom: 6px solid gray;
  padding-left: 24px;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20vh;
  border-bottom: 1.5px solid gray;
  padding-left: 24px;
`;

export const StyleMain = styled.main`
  flex: 1 1 auto;
  padding: 24px;
`;

export const StyleAside = styled.aside`
  padding: 24px;
  border: 1px solid green;
`;

export const StyledFooter = styled.footer`
  height: 10vh;
  border-top: 6px solid gray;
  padding-left: 24px;
`;

export const Header = ({ children }) => (
  <StyledHeader role="banner">
    {children}
  </StyledHeader>
);

export const Nav = ({ ariaLabelledby, title, children }) => (
  <StyledNav aria-labelledby={ariaLabelledby}>
    <h2 id={ariaLabelledby}>{title}</h2>
    {children}
  </StyledNav>
);

export const Main = ({ children }) => (
  <StyleMain role="main">
    {children}
  </StyleMain>
);

export const Aside = ({ ariaLabelledby, title, children }) => (
  <StyleAside aria-labelledby={ariaLabelledby}>
    <h3 id={ariaLabelledby}>{title}</h3>
    {children}
  </StyleAside>
);

export const ListItems = ({ items, key1, key2 }) => (
  <ul>
    {items.map(item => (
      <Fragment key={item[key1]}>
        <li>{item[key2]}</li>
      </Fragment>
    ))}
  </ul>
);

export const Footer = ({ children }) => (
  <StyledFooter role="contentinfo">
    {children}
  </StyledFooter>
);
