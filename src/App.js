import React from 'react';
import './App.scss';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Login from "./components/Login";
import GameBoard from "./components/GameBoard";
import Result from "./components/Result";
import {Container} from 'react-bootstrap';

function App() {
  return (
      <BrowserRouter>
          <Container className="app-container">
              <Route exact path="/" component={Login}/>
              <Route path="/login" component={Login}/>
              <Route path="/game" component={GameBoard}/>
              <Route path="/result" component={Result}/>
          </Container>
      </BrowserRouter>
  );
}

export default App;
