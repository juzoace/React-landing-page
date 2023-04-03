import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Section from './components/section/section';
import Details from './components/details/details';
import Testimonials from './components/testimonials/testimonials';
import CallToAction from './components/callToAction/callToAction';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Details />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
