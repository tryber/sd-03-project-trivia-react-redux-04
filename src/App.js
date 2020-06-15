import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Game,
  Home,
  Feedback,
  Ranking,
  Config,
  PageNotFound,
 } from './components';

import logo from './trivia.png';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SUA VEZ
        </p>
      </header>
      <Switch>
        <Route path="/ranking" component={Ranking} />
        <Route path="/game" render={() => <Game />} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/config" component={Config} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}
