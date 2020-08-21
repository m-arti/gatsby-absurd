import React from 'react';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Container style={{marginTop:'20px', textAlign:'left'}}>
      <h1>NOT FOUND</h1>
      <br></br>
      <p>Sorry, that page does not exist.</p>
      <br></br>
      <p>
        <a style={{color:'#ff5500', textDecoration:'none'}} href="https://martinssamuel.com/">← Homepage</a>
      </p>
    </Container>
  </Layout>
);

export default NotFoundPage;
