import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import Header from './resources/Header';
import SingleHouse from './resources/SingleHouse';

import Grid from '@material-ui/core/Grid';


import Store from './Store';

function App() {

  const [watch, watchChange] = useState(false);

  //setInterval(()=>{watchChange(!watch)}, 1000);

  const Houses = JSON.parse(JSON.stringify(Store.houses)).map((item, index) => {
    return (
      <Grid key={index} item lg={3} md={4} sm={6} >
        <SingleHouse />
      </Grid>
    );
  })

  return (
    <div className="App">

      <Header />

      <Grid container spacing={0}>
        {Houses}
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
