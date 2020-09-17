import React from 'react';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Container style={{marginTop:'20px', textAlign:'left'}}>
      <hr/>
      <br></br>
      <h2>L O S T &nbsp; I N &nbsp; S P A C E &nbsp; ✈︎</h2>
      <br></br>
      <br></br>
      <br></br>
      <p style={{fontWeight:'300'}}>Sorry, that page does not exist. <br></br> It may have been lost.</p>
      <br></br>
      <p style={{fontWeight:'300'}}>
        <a style={{color:'#ff5500', textDecoration:'none'}} href="https://martinssamuel.com/">← 🌍 Homepage</a>
      </p>
    </Container>
  </Layout>
);

export default NotFoundPage;
