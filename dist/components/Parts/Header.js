import React, { useState } from 'react';
import './styles/Header.module.css';
const Menu = require('./img/menu.svg');
const Close = require('./img/close.svg');
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (React.createElement("header", { className: "header" },
        React.createElement("a", { href: "./", className: "name" }, "Rettra"),
        React.createElement("nav", { className: `nav ${isOpen ? 'active' : ''}` },
            React.createElement("ul", { className: "nav__list" },
                React.createElement("li", { className: "nav__list__item" },
                    React.createElement("a", { href: "#About", className: "nav__list__item" }, "About")),
                React.createElement("li", { className: "nav__list__item" },
                    React.createElement("a", { href: "#Offer", className: "nav__list__item" }, "Offers")),
                React.createElement("li", { className: "nav__list__item" },
                    React.createElement("a", { href: "#Cooperate", className: "css.nav__list__item" }, "Cooperate")),
                React.createElement("li", { className: "nav__list__item" },
                    React.createElement("a", { href: "#footer", className: "nav__list__item" }, "Contact")))),
        isOpen ? (React.createElement("button", { className: "menu__btn", onClick: () => setIsOpen(!isOpen) },
            React.createElement(Close, null))) : (React.createElement("button", { className: "menu__btn", onClick: () => setIsOpen(!isOpen) },
            React.createElement(Menu, null)))));
};
//# sourceMappingURL=Header.js.map