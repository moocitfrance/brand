import React from 'react';

import logo from '../logo-white.png';
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
        <a href="/tos">Conditions d'utilisation</a>
        <a href="/privacy">Politique de confidentialité</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
