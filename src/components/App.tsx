import React from 'react';
import { Header } from './Parts/Header.js';
import { Main } from './Parts/Main.js';
import { Footer } from './Parts/Footer.js';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
