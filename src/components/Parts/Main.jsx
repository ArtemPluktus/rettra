import css from './Rettra.module.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import { ReactComponent as IT } from './img/it.svg';
import { ReactComponent as Trade } from './img/trade.svg';
import { ReactComponent as Agricultural } from './img/agricultural.svg';
import { ReactComponent as Production } from './img/production.svg';
import { ReactComponent as Telecommunication } from './img/telecommunication.svg';
import { ReactComponent as Forein } from './img/forein.svg';
import { ReactComponent as Services } from './img/services.svg';
import { ReactComponent as Construction } from './img/construction.svg';

export function Main() {
  return (
    <div>
      <section className={css.hero}>
        <h1 className={css.hero__title}>ReTTra International</h1>
        <p className={css.hero__text}>
          We offer comprehensive management consulting solutions, developing
          growth strategies and implementing innovative approaches to achieve
          business objectives.
        </p>
      </section>
      <section id="About" className={css.about}>
        <h2 className={css.about__title}>About us</h2>
        <ul className={css.about__list}>
          <li className={css.about__list__item}>
            <img src={img1} alt="work" className={css.about__list__img} />
            <p className={css.about__list__text}>
              Our company specializes in providing high-quality business
              consulting services, helping clients optimize processes and
              enhance operational efficiency. We offer comprehensive management
              consulting solutions, developing growth strategies and
              implementing innovative approaches to achieve business objectives.
              With our support, you can improve financial performance, increase
              competitiveness, and ensure sustainable growth for your company in
              the market.
            </p>
          </li>
          <li className={css.about__list__item__even}>
            <img src={img2} alt="work" className={css.about__list__img} />
            <p className={css.about__list__text}>
              We provide expert support in processing financial data, automating
              processes and optimizing financial operations to ensure efficiency
              and accuracy. Thanks to our experience in the field of financial
              services, we help clients implement innovative solutions that
              increase the quality of service and ensure sustainable business
              development.
            </p>
          </li>
          <li className={css.about__list__item}>
            <img src={img3} alt="work" className={css.about__list__img} />
            <p className={css.about__list__text}>
              Our company specializes in conducting in-depth market research to
              provide clients with valuable insights into trends, consumer
              preferences and the competitive environment. We use modern methods
              of public opinion analysis to help organizations understand the
              needs and expectations of their audience. With our expertise in
              market research and public opinion, clients receive accurate and
              relevant data to make informed decisions.
            </p>
          </li>
        </ul>
      </section>
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
                (css.cooperate__list__img,
                css.cooperate__list__img__agricultural)
              }
            />
            <span className={css.cooperate__list__text}>
              Agricultural sector
            </span>
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
    </div>
  );
}
