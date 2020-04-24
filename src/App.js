import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

export default function App() {
  return (
    <div className='Wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}
