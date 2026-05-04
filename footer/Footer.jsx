import React from 'react';

import logo from '../logo.svg';
import './Footer.scss';

const Footer = () => (
  <footer className="brand-footer">
    <div className="brand-footer__inner">
      <a className="brand-footer__logo-link" href="/">
        <img
          className="brand-footer__logo"
          src={logo}
          alt="Site logo"
        />
      </a>
      <nav className="brand-footer__links" aria-label="Footer">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/tos">Terms of service</a>
        <a href="/privacy">Privacy policy</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
