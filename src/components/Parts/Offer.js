import React from 'react';
import css from './styles/Offer.module.css';
const offers = [
  'Business and other management consulting',
  'Other support activities for the provision of financial services',
  'Market research and public opinion research',
  'Activities of other HR organizations',
  'Comprehensive administrative and management services',
];

export const Offer = () => {
  return (<section id="Offer" className={css.offer}>
    <h2 className={css.offer__title}>Offers</h2>
    <ul className={css.offer__list}>
      {offers.map((offer, index) => (<li key={index} className={css.offer__list__item}>
        <p className={css.offer__list__text}>{offer}</p>
      </li>))}
    </ul>
  </section>);
};