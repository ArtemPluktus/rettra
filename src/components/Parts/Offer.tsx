import React from 'react';
import './styles/Offer.module.css';

const offers: string[] = [
  'Business and other management consulting',
  'Other support activities for the provision of financial services',
  'Market research and public opinion research',
  'Activities of other HR organizations',
  'Comprehensive administrative and management services',
];


export const Offer: React.FC = () => {
  return (
    <section id="Offer" className="offer">
      <h2 className="offer__title">Offers</h2>
      <ul className="offer__list">
        {offers.map((offer, index) => (
          <li key={index} className="offer__list__item">
            <p className="offer__list__text">{offer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};