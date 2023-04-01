import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Section from './components/section/section';
import Details from './components/details/details';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Details />
    </div>
  );
}

export default App;
