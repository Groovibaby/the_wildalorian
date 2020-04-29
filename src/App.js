import React from 'react';
import './App.css';
import Header from './components/Header';
import Cockpit from './components/Cockpit';
import YodaFinal from './components/YodaFInal';
import YodaTalk from './components/YodaTalk';

function App() {
  return (
    <div className="App">

      <Header />
      <Cockpit />
      <YodaFinal />
      <YodaTalk />

    </div>
  );
}
export default App;