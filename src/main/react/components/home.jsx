import React from "react";
import {Link, Route} from 'react-router-dom';
import product1 from '../../resources/featureditem.jpg';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }

  getImageHelper() {
    return Object.assign({}, {prettyGirlPic: product1})
  }


  render() {
    return <div className="home-container">
      <div className="home-featured-item-header">
        Three NYX Combo <span className="heart-pink"><i class="fa fa-heart" aria-hidden="true"></i></span> for $19.99
      </div>
      <div className="home-featured-item-subheader">
        Eyeliner + Foundation + Eyeshadow
      </div>
      <img className="home-featured-item" src={this.getImageHelper().prettyGirlPic}/>
    </div>;
  }
}
