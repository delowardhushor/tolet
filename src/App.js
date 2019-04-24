import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import Header from './resources/Header';
import SingleHouse from './resources/SingleHouse';

import {Container, Row, Col } from 'react-bootstrap';

import Store from './Store';
function App() {
  const [watch, watchChange] = useState(false);
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col md="4"><SingleHouse /></Col>
          <Col md="4"><SingleHouse /></Col>
          <Col md="4"><SingleHouse /></Col>
          <Col md="4"><SingleHouse /></Col>
        </Row>
      </Container>

      
      
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
