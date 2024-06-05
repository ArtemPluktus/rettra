import React from 'react';
import './styles/Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer">
      <a href="./" className="footer__name">
        ReTTra International Kft
      </a>
      <ul className="footer__list">
        <li className="footer__list__item">
          <a
            href="https://maps.app.goo.gl/dbR2RkfiZiv1L2gQ8"
            className="footer__list__link"
          >
            1089 Budapest, Korányi Sándor utca 4. 4.
          </a>
        </li>
        <li className="footer__list__item">
          <a
            href="mailto:RettRa@protonmail.com"
            className="footer__list__email"
          >
            RettRa@protonmail.com
          </a>
        </li>
        <li className="footer__list__item">
          <a
            href="mailto:rettrainternationalkft@gmail.com"
            className="footer__list__email"
          >
            rettrainternationalkft@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
};
