import React from 'react';
import logo from './logo.svg';
import './App.css';

import GameInfo from './components/howtoplay'
import MainComponent from './components/maincomponent'
import Rules from './components/rules'


const App = () => {
  return (
    <div className="app">
      <GameInfo />
      <MainComponent />
    </div>
  )
}
export default App;
