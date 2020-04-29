import React from 'react';
import './App.css';
import Cockpit from './components/Cockpit';
import YodaFinal from './components/YodaFInal';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Cockpit />
      <YodaFinal />
    </div>
  );
}
export default App;