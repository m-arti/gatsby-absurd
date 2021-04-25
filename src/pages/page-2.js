import React from 'react';

import Layout from '@common/Layout';
import Navbar2 from '@common/Navbar2';
import { Container } from '@components/global';

const SecondPage = () => (
  <Layout>
    <Navbar2/>
    <Container style={{paddingTop:'150px'}}>
      <h1>Page 2</h1>
      <p>Nothing here, yet.</p>
    </Container>
  </Layout>
);

export default SecondPage;
