import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Contact from '@sections/Contact';
// import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar/>
    <Header/>
    <About/>
    <Contact/>
    <Footer/>
  </Layout>
);

// excluded
// <Faq/>

export default IndexPage;
