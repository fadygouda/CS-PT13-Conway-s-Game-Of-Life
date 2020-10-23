import React from 'react';
import logo from './logo.svg';
import './App.css';

import HowToPlay from './components/howtoplay'
import MainComponent from './components/maincomponent'


const App = () => {
  return (
    <div>
      <MainComponent />
      <HowToPlay />
    </div>
  )
}
export default App;
