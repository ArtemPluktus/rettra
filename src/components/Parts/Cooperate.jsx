import css from './styles/Cooperate.module.css';
import { ReactComponent as IT } from './img/it.svg';
import { ReactComponent as Trade } from './img/trade.svg';
import { ReactComponent as Agricultural } from './img/agricultural.svg';
import { ReactComponent as Production } from './img/production.svg';
import { ReactComponent as Telecommunication } from './img/telecommunication.svg';
import { ReactComponent as Forein } from './img/forein.svg';
import { ReactComponent as Services } from './img/services.svg';
import { ReactComponent as Construction } from './img/construction.svg';

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
  return (
    <section id="Cooperate" className={css.cooperate}>
      <h2 className={css.cooperate__title}>
        Areas of business with which we cooperate
      </h2>
      <ul className={css.cooperate__list}>
        {cooperateList.map((item, index) => (
          <li key={index} className={css.cooperate__list__item}>
            <item.icon className={css.cooperate__list__img} />
            <span className={css.cooperate__list__text}>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
