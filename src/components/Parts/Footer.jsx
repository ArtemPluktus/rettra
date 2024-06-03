import css from './Rettra.module.css';

export function Footer() {
  return (
    <footer id="footer" className={css.footer}>
      <a href="./rettra" class={css.footer__name}>
        ReTTra International Kft
      </a>
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
            className={css.footer__list__email}
          >
            RettRa@protonmail.com
          </a>
        </li>
        <li className={css.footer__list__link}>
          <a
            href="mailto:rettrainternationalkft@gmail.com"
            className={css.footer__list__email}
          >
            rettrainternationalkft@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
}
