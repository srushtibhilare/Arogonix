import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProblemSolution from './components/ProblemSolution';
import BusinessModel from './components/BusinessModel';
import CarbonProcess from './components/CarbonProcess';
import ImpactMap from './components/ImpactMap';
import IndiaMap from './components/IndiaMap';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <main>
        <Hero />
        <About />
        <ProblemSolution />
        <BusinessModel />
        <CarbonProcess />
        <ImpactMap />
        <IndiaMap />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;