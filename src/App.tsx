import React from 'react';
import './App.css';
import Header from './components/Header';
import GuestList from './pages/GuestList';

function App() {
  return (
    <div className="App">
      <Header/>
      <GuestList />
    </div>
  );
}

export default App;
