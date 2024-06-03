import css from './Rettra.module.css';
import { useState } from 'react';
import { ReactComponent as Menu } from './img/menu.svg';
import { ReactComponent as Close } from './img/close.svg';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={css.header}>
      <a href="./rettra" className={css.name}>
        Rettra
      </a>
      <nav className={`${css.nav} ${isOpen ? css.active : ''}`}>
        <ul className={css.nav__list}>
          <li className={css.nav__list__item}>
            <a href="#About" className={css.nav__list__item}>
              About
            </a>
          </li>
          <li className={css.nav__list__item}>
            <a href="#footer" className={css.nav__list__item}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {isOpen ? (
        <button className={css.menu__btn} onClick={() => setIsOpen(!isOpen)}>
          <Close />
        </button>
      ) : (
        <button className={css.menu__btn} onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
      )}
    </header>
  );
}
