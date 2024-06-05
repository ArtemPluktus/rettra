import React, { useState } from 'react';
import './styles/Header.module.css';
const Menu = require('./img/menu.svg') as string;
const Close = require('./img/close.svg') as string;

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <a href="./" className="name">
        Rettra
      </a>
      <nav className={`nav ${isOpen ? 'active' : ''}`}>
        <ul className="nav__list">
          <li className="nav__list__item">
            <a href="#About" className="nav__list__item">
              About
            </a>
          </li>
          <li className="nav__list__item">
            <a href="#Offer" className="nav__list__item">
              Offers
            </a>
          </li>
          <li className="nav__list__item">
            <a href="#Cooperate" className="css.nav__list__item">
              Cooperate
            </a>
          </li>
          <li className="nav__list__item">
            <a href="#footer" className="nav__list__item">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {isOpen ? (
        <button className="menu__btn" onClick={() => setIsOpen(!isOpen)}>
          <Close />
        </button>
      ) : (
        <button className="menu__btn" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
      )}
    </header>
  );
}
