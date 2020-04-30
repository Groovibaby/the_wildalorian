import React from 'react';
import './App.css';
import Header from './components/Header';
import Cockpit from './components/Cockpit';
import YodaSentence from './components/YodaSentence';


function App() {
  return (
    <div className="App">

      <Header />
      <Cockpit />
      <YodaSentence />

    </div>
  );
}
export default App;