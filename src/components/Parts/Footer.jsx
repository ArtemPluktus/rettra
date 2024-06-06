import css from './styles/Footer.module.css';

export function Footer() {
  return (
    <footer id="footer" className={css.footer}>
      <a href="./" className={css.footer__name}>
        ReTTra International Kft
      </a>
      <p className={css.footer__text}>
        We are always ready for cooperation and new challenges. Contact us for
        more information.
      </p>
      <ul className={css.footer__list}>
        <li className={css.footer__list__item}>
          <a
            href="https://maps.app.goo.gl/dbR2RkfiZiv1L2gQ8"
            className={css.footer__list__link}
          >
            1089 Budapest, Korányi Sándor utca 4. 4.
          </a>
        </li>
        <li className={css.footer__list__item}>
          <a
            href="mailto:RettRa@protonmail.com"
            className={css.footer__list__contact}
          >
            RettRa@protonmail.com
          </a>
        </li>
        <li className={css.footer__list__link}>
          <a href="tel:+36203439150" className={css.footer__list__contact}>
            +36203439150
          </a>
        </li>
      </ul>
    </footer>
  );
}
