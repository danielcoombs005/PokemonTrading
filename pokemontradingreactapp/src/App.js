import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Pokemon from './components/Pokemon';
import './App.css';

function App() {
  return (
    <div className = "app">
      <Header />
      <Pokemon />
    </div>
  );
}

export default App;