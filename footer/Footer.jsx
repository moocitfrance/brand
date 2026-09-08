import React from 'react';
import { getConfig } from '@edx/frontend-platform';

import logo from '../logo-white.png';
import './Footer.scss';

const Footer = () => {
  const {
    LMS_BASE_URL,
    PRIVACY_POLICY_URL,
    TERMS_OF_SERVICE_URL,
  } = getConfig();
  const lmsBaseUrl = (LMS_BASE_URL || '').replace(/\/+$/, '');
  const homeUrl = lmsBaseUrl || '/';
  const privacyPolicyUrl = PRIVACY_POLICY_URL || `${lmsBaseUrl}/privacy`;
  const termsOfServiceUrl = TERMS_OF_SERVICE_URL || `${lmsBaseUrl}/tos`;

  return (
    <footer className="brand-footer">
      <div className="brand-footer__inner">
        <a className="brand-footer__logo-link" href={homeUrl}>
          <img
            className="brand-footer__logo"
            src={logo}
            alt="Site logo"
          />
        </a>
        <nav className="brand-footer__links" aria-label="Footer">
          <a href={termsOfServiceUrl}>Conditions d'utilisation</a>
          <a href={privacyPolicyUrl}>Politique de confidentialité</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
