import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Link} from 'react-router-dom';

import Store from './Store';

function Home() {

  return (
    <div className="App">
      <h1>This is home {Store.name}</h1>
      <Link to="/" >App</Link><br/>
      <Link to="/home" >home</Link><br/>
      <Link to="/settings" >settings</Link>
    </div>
  );
}

export default Home;
