import React from 'react';
import './styles/Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">ReTTra International</h1>
      <p className="hero_text">
        We will help you navigate the journey from idea to profit realization.
      </p>
    </section>
  );
};
