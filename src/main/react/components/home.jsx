import React from "react";
import {Link, Route} from 'react-router-dom';
import featuredItems from '../../resources/featureditem.jpg';
import product1 from "../../resources/product1.jpg"
import product2 from "../../resources/product2.png"

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }

  getFeaturedItems() {
    return Object.assign({}, {featuredItemPic: featuredItems})
  }

  getNewArrivalItems() {
    return Object.assign({}, {newArrival1: product1, description: "Natural Blond Hair"}, {newArrival2: product2} )
  }


  render() {
    return <div className="home-container">
      <div className="home-featured-item-header">
        Three NYX Combo <span className="heart-pink"><i class="fa fa-heart" aria-hidden="true"></i></span> for $19.99
      </div>
      <div className="home-featured-item-subheader">
        Eyeliner + Foundation + Eyeshadow
      </div>
      <img className="home-featured-item" src={this.getFeaturedItems().featuredItemPic}/>

      <img className="xyz" src={this.getNewArrivalItems().newArrival1} />
      {this.getNewArrivalItems().description}
    </div>;
  }
}
