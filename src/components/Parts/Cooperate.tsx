import React from 'react';
import './styles/Cooperate.module.css';
const IT = require('./img/it.svg') as string;
const Trade = require('./img/trade.svg') as string;
const Agricultural = require('./img/agricultural.svg') as string;
const Production = require('./img/production.svg') as string;
const Telecommunication = require('./img/telecommunication.svg') as string;
const Forein = require('./img/forein.svg') as string;
const Services = require('./img/services.svg') as string;
const Construction = require('./img/construction.svg') as string;

const cooperateList: { icon: string; text: string; }[] = [
  { icon: IT, text: 'IT' },
  { icon: Trade, text: 'Wholesale retail trade' },
  { icon: Production, text: 'Production' },
  { icon: Agricultural, text: 'Agricultural sector' },
  { icon: Telecommunication, text: 'Telecommunication' },
  { icon: Forein, text: 'Foreign companies' },
  { icon: Services, text: 'Services' },
  { icon: Construction, text: 'Construction' },
];

export const Cooperate: React.FC = () => {
  return (
    <section id="Cooperate" className="cooperate">
      <h2 className="cooperate__title">
        Areas of business with which we cooperate
      </h2>
      <ul className="cooperate__list">
        {cooperateList.map((item, index) => (
          <li key={index} className="cooperate__list__item">
            <item.icon />
            <span className="cooperate__list__text">{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

