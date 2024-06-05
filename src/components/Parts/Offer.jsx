import css from './styles/Offer.module.css';

export function Offer() {
  return (
    <section id="Offer" className={css.offer}>
      <h2 className={css.offer__title}>Offers</h2>
      <ul className={css.offer__list}>
        <li className={css.offer__list__item}>
          <p className={css.offer__list__text}>
            Business and other management consulting
          </p>
        </li>
        <li className={css.offer__list__item}>
          <p className={css.offer__list__text}>
            Other support activities for the provision of financial services
          </p>
        </li>
        <li className={css.offer__list__item}>
          <p className={css.offer__list__text}>
            Market research and public opinion research
          </p>
        </li>
        <li className={css.offer__list__item}>
          <p className={css.offer__list__text}>
            Activities of other HR organizations
          </p>
        </li>
        <li className={css.offer__list__item}>
          <p className={css.offer__list__text}>
            Comprehensive administrative and management services
          </p>
        </li>
      </ul>
    </section>
  );
}
