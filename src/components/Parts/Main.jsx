import React from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { Offer } from './Offer';
import { Cooperate } from './Cooperate';

export function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Offer />
      <Cooperate />
    </main>
  );
}
