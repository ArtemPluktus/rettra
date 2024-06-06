import React from 'react';
import css from './styles/Hero.module.css';

export function Hero() {
  return (
    <section className={css.hero}>
      <h1 className={css.hero__title}>ReTTra International</h1>
      <p className={css.hero__text}>
        We are pleased to present our high-quality consulting services that will
        help you take your business to the next level
      </p>
    </section>
  );
}
