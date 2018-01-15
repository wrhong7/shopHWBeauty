import React from "react";
import {Link, Route} from 'react-router-dom';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return <div className="home-container">
      HELLO WORLD
    </div>;
  }
}
