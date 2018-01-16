import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "../styles/main.scss";

import Home from "./components/home";
import NavBar from "./components/navbar";
import Tail from "./components/tail";
import storeLocator from "./components/storelocator";

export default function App() {

  const getHome = () => {
    return <Home/>;
  };

  return <BrowserRouter>
    <div id="application-container">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={getHome}/>
        <Route path="/storeLocator" component={storeLocator}/>
      </Switch>
      <Tail/>
    </div>
  </BrowserRouter>
}

