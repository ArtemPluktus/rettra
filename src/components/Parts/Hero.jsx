import css from './Rettra.module.css';

export function Hero() {
  return (
    <section className={css.hero}>
      <h1 className={css.hero__title}>ReTTra International</h1>
      <p className={css.hero__text}>
        We offer comprehensive management consulting solutions, developing
        growth strategies and implementing innovative approaches to achieve
        business objectives.
      </p>
    </section>
  );
}
