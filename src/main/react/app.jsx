import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "../styles/main.scss";

import Home from "./components/home";
import NavBar from "./components/navbar";
import Tail from "./components/tail";

export default function App() {

  const getHome = () => {
    return <Home/>;
  };

  return <BrowserRouter>
    <div id="application-container">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={getHome}/>
      </Switch>
      <Tail/>
    </div>
  </BrowserRouter>
}

