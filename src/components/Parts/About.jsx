import css from './styles/About.module.css';

const aboutItems = [
  {
    title: 'Business Market Entry',
    text: 'Developing strategies for launching new products and services. Consulting on tax and regulatory requirements.',
  },
  {
    title: 'Financial Operations',
    text: 'Managing investments and securities. Organizing and conducting tax payments in various jurisdictions.',
  },
  {
    title: 'Real Estate Management',
    text: 'Renting office spaces and managing payments. Organizing online offices and other consulting services.',
  },
  {
    title: 'Personnel Recruitment',
    text: 'Recruiting top managers, financiers, and lawyers. Preparing documents for participation in tenders and auctions.',
  },
  {
    title: 'Risk Management',
    text: 'Checking counterparties and deals for sanction lists and AML compliance. Protecting against fraud and dishonest partners.',
  },
  {
    title: 'Comprehensive Business Solutions',
    text: "Creating 'turnkey' companies. Organizing events, exhibitions, and conferences. Offering card solutions as Visa and Mastercard agents.",
  },
];

export const About = () => {
  return (
    <section id="About" className={css.about}>
      <h2 className={css.about__title}>About us</h2>
      <ul className={css.about__list}>
        {aboutItems.map((item, index) => (
          <li key={index} className={css.about__list__item}>
            <h2 className={css.about__list__title}>{item.title}</h2>
            <p className={css.about__list__text}>{item.text}</p>
            <ul className={css.about__list__link}>
              <li className={css.about__link__item}>
                <a href="/" className={css.about__link__learn}>
                  Learn More
                </a>
              </li>
              <li className={css.about__link__item}>
                <a href="/" className={css.about__link__enquire}>
                  Enquire Now
                </a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
