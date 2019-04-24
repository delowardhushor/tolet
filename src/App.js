import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import Header from './resources/Header';
import SingleHouse from './resources/SingleHouse';

import Grid from '@material-ui/core/Grid';


import Store from './Store';
function App() {
  const [watch, watchChange] = useState(false);
  return (
    <div className="App">

      <Header />

      <Grid container spacing={24}>
        <Grid item xs={12} md={4} >
          <SingleHouse />
        </Grid>
        <Grid item xs={12} md={4} >
          <SingleHouse />
        </Grid>
        <Grid item xs={12} md={4} >
          <SingleHouse />
        </Grid>
      </Grid>

      
      
      <h1>This is app {Store.name}</h1>
      <Link to="/" >App</Link><br/>
      <Link to="/home" >home</Link><br/>
      <Link to="/settings" >settings</Link>

      <button onClick={() => {
        Store.name = "Mamuin";
        watchChange(!watch);
      }}>Change</button>
    </div>
  );
}

export default App;
