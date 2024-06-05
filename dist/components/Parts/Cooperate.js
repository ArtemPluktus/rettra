import React from 'react';
import './styles/Cooperate.module.css';
const IT = require('./img/it.svg');
const Trade = require('./img/trade.svg');
const Agricultural = require('./img/agricultural.svg');
const Production = require('./img/production.svg');
const Telecommunication = require('./img/telecommunication.svg');
const Forein = require('./img/forein.svg');
const Services = require('./img/services.svg');
const Construction = require('./img/construction.svg');
const cooperateList = [
    { icon: IT, text: 'IT' },
    { icon: Trade, text: 'Wholesale retail trade' },
    { icon: Production, text: 'Production' },
    { icon: Agricultural, text: 'Agricultural sector' },
    { icon: Telecommunication, text: 'Telecommunication' },
    { icon: Forein, text: 'Foreign companies' },
    { icon: Services, text: 'Services' },
    { icon: Construction, text: 'Construction' },
];
export const Cooperate = () => {
    return (React.createElement("section", { id: "Cooperate", className: "cooperate" },
        React.createElement("h2", { className: "cooperate__title" }, "Areas of business with which we cooperate"),
        React.createElement("ul", { className: "cooperate__list" }, cooperateList.map((item, index) => (React.createElement("li", { key: index, className: "cooperate__list__item" },
            React.createElement(item.icon, null),
            React.createElement("span", { className: "cooperate__list__text" }, item.text)))))));
};
//# sourceMappingURL=Cooperate.js.map