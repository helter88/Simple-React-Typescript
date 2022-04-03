import React from 'react';
import './App.css';
import Header from './components/Header';
import GuestList from './pages/GuestList';
import {Routes, Route} from 'react-router-dom';
import Welcome from './pages/Welcome';
import FindUser from './pages/FindUser';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path="/guest-list" element={<GuestList />} />
        <Route path="/find-user" element={<FindUser />} />
      </Routes>
    </div>
      )
}

export default App;
