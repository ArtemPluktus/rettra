import css from './styles/Hero.module.css';

export function Hero() {
  return (
    <section className={css.hero}>
      <h1 className={css.hero__title}>ReTTra International</h1>
      <p className={css.hero__text}>
        We will help you navigate the journey from idea to profit realization.
      </p>
    </section>
  );
}
