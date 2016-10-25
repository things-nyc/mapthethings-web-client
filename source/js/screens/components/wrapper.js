import React from 'react';

import Header from './header';
import Footer from './footer';

export const Wrapper = ({
  children
}) => (
  <section className="content">
    <Header />
    { children }
    <Footer />
  </section>
);

Wrapper.propTypes = {
  children: React.PropTypes.node
};

