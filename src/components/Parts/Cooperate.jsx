import css from './Rettra.module.css';
import { ReactComponent as IT } from './img/it.svg';
import { ReactComponent as Trade } from './img/trade.svg';
import { ReactComponent as Agricultural } from './img/agricultural.svg';
import { ReactComponent as Production } from './img/production.svg';
import { ReactComponent as Telecommunication } from './img/telecommunication.svg';
import { ReactComponent as Forein } from './img/forein.svg';
import { ReactComponent as Services } from './img/services.svg';
import { ReactComponent as Construction } from './img/construction.svg';

export function Cooperate() {
  return (
    <section id="Cooperate" className={css.cooperate}>
      <h2 className={css.cooperate__title}>
        Areas of business with which we cooperate
      </h2>
      <ul className={css.cooperate__list}>
        <li className={css.cooperate__list__item}>
          <IT className={css.cooperate__list__img} />
          <span className={css.cooperate__list__text}>IT</span>
        </li>
        <li className={css.cooperate__list__item}>
          <Trade className={css.cooperate__list__img} />
          <span className={css.cooperate__list__text}>
            Wholesale retail trade
          </span>
        </li>
        <li className={css.cooperate__list__item}>
          <Production className={css.cooperate__list__img} />
          <span className={css.cooperate__list__text}>Production</span>
        </li>
        <li className={css.cooperate__list__item}>
          <Agricultural
            className={
              (css.cooperate__list__img, css.cooperate__list__img__agricultural)
            }
          />
          <span className={css.cooperate__list__text}>Agricultural sector</span>
        </li>
        <li className={css.cooperate__list__item}>
          <Telecommunication className={css.cooperate__list__img} />
          <span className={css.cooperate__list__text}>Telecommunication</span>
        </li>
        <li className={css.cooperate__list__item}>
          <Forein className={css.cooperate__list__img} />
          <span className={css.cooperate__list__text}>Foreign companies</span>
        </li>
        <li className={css.cooperate__list__item}>
          <Services className={css.cooperate__list__img} />
          <span className={css.cooperate__list__text}>Services</span>
        </li>
        <li className={css.cooperate__list__item}>
          <Construction className={css.cooperate__list__img} />
          <span className={css.cooperate__list__text}>Construction</span>
        </li>
      </ul>
    </section>
  );
}
