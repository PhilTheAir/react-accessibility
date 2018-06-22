import React from 'react';
import { PageWrapper, Page, Header, Nav, Main, Aside, ListItems, Footer } from '../components/Layout';
import { LinkIcon } from '../components/LinkIcon';
import { links, lists } from './__fixtures__/home';

const PageContainer = () => (
  <PageWrapper>
    <Page>
      <Header>
        <h1>React Accessibility</h1>
      </Header>
      <Nav ariaLabelledby="mainnavheader" title="Navigation Menu">
        {
          links.map((link, index) => <LinkIcon
            key={link.title}
            title={link.title}
            link={link.href}
            icon={link.icon}
          />)
        }
      </Nav>
      <Main>
        <article>
          <h3>Main region:</h3>
          <ListItems items={lists} key1="id" key2="name" />
          <Aside ariaLabelledby="relatedheader" title="Aside region" />
        </article>
      </Main>
      <Footer>
        <p>Auther: Liwen CHEN</p>
      </Footer>
    </Page>
  </PageWrapper>
);

export default PageContainer;