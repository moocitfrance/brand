import React from 'react';
import { getConfig } from '@edx/frontend-platform';

import logo from '../logo-white.png';
import './Footer.scss';

const Footer = () => {
  const lmsBaseUrl = (getConfig().LMS_BASE_URL || '').replace(/\/+$/, '');

  return (
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
          <a href={`${lmsBaseUrl}/tos`}>Conditions d'utilisation</a>
          <a href={`${lmsBaseUrl}/privacy`}>Politique de confidentialité</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
