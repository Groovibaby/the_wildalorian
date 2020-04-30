import React from 'react';
import './App.css';
import Header from './components/Header';
import Cockpit from './components/Cockpit';
import YodaSentence from './components/YodaSentence';
import Footer from './components/Footer';
import YodaTalk from './components/YodaTalk';


function App() {
  return (
    <div className="App">

      <Header />
      <Cockpit />
      <YodaTalk /> 
      <Footer /> 
    </div>
  );
}
export default App;