import css from './Rettra.module.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';

export function Main() {
  return (
    <div>
      <section className={css.hero}>
        <h1 className={css.hero__title}>ReTTra International Kft</h1>
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
          <li className={css.about__list__item}>
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
    </div>
  );
}
