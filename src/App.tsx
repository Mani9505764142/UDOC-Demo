import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUK from './components/WhyUK';
import Universities from './components/Universities';
import Services from './components/Services';
import Process from './components/Process';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <WhyUK />
      <Universities />
      <Services />
      <Process />
      <Statistics />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
