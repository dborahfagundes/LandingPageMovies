import React from 'react';
import Header from './components/Header';
import FilmesList from './components/FilmesList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <FilmesList />
    </div>
  );
};

export default App;