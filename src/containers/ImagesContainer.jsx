import React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { LinkIcon } from '../components/LinkIcon';
import { links } from './__fixtures__/home';

const FlexWrppaer = styled(Flex)`
  height: 100vh;
`;

const ImagesContainer = () => (
  <FlexWrppaer justify="center" alignItems="center">
    {
      links.map((link, index) => <LinkIcon
        key={link.title}
        title={link.title}
        link={link.href}
        icon={link.icon}
      />)
    }
  </FlexWrppaer>
);

export default ImagesContainer;