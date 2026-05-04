import React from 'react';

import logo from '../logo.svg';
import './Footer.scss';

const Footer = () => (
  <footer className="brand-footer">
    <div className="brand-footer__inner">
      <a className="brand-footer__logo-link" href="https://www.cavilam.com">
        <img
          className="brand-footer__logo"
          src={logo}
          alt="CAVILAM - Alliance Francaise"
        />
      </a>
      <nav className="brand-footer__links" aria-label="Footer">
        <a href="https://www.cavilam.com/mentions-legales/">Mentions legales</a>
        <a href="https://www.cavilam.com/contact/">Contact</a>
        <a href="mailto:mooc@cavilam.com">mooc@cavilam.com</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
