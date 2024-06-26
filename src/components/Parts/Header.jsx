import React, { useState } from 'react';
import css from './styles/Header.module.css';
import { ReactComponent as Logo } from './img/logo.svg';
import { ReactComponent as Menu } from './img/menu.svg';
import { ReactComponent as Close } from './img/close.svg';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={css.header}>
      <a href="./" className={css.header__link}>
        <Logo className={css.header__logo}></Logo>
        <span className={css.header__name}>Rettra</span>
      </a>
      <nav className={`${css.nav} ${isOpen ? css.active : ''}`}>
        <ul className={css.nav__list}>
          <li className={css.nav__list__item}>
            <a href="#About" className={css.nav__list__item}>
              About
            </a>
          </li>
          <li className={css.nav__list__item}>
            <a href="#Offer" className={css.nav__list__item}>
              Offers
            </a>
          </li>
          <li className={css.nav__list__item}>
            <a href="#Cooperate" className={css.nav__list__item}>
              Cooperate
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
};
