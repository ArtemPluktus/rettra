import React from 'react';
import css from './styles/Hero.module.css';

export function Hero() {
  return (
    <section className={css.hero}>
      <h1 className={css.hero__title}>ReTTra International</h1>
      <p className={css.hero__text}>
        We have a team of 45 highly qualified specialists, each with extensive
        experience and knowledge in their field.
      </p>
    </section>
  );
}
