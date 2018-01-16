import React from 'react';
import {Link} from 'react-router-dom';
import image from '../../resources/storeLocatorPhoto.jpg'

export default class storeLocator extends React.Component {

  constructor(props) {
    super(props);
  }

  storeLocator() {
    return <div className="storeContainer">
      <img className="storeImage" src={image}/>
      <div className="location-description">
        <div className="store-title">
          <div className="store-name-number">HW Beauty #1</div>
          <div className="store-city-name">Amite City, LA</div>
        </div>
        <div className="store-description">
          <div className="store-description-top">
            Our first online and offline collaboration store is here. Meet us in Amite City for our latest collection. You can return in store and apply credits to your offline purchases.
          </div>
          <div className="store-description-middle">
            Luxury Products at Reasonable Prices
          </div>
          <div className="store-description-bottom">
            <div className="store-description-bottom-left">
              <div className="store-description-bottom-bold">
                <b>Location</b>
              </div>
              321 S 1st St, Amite City, LA<br/><a className="fetch-map" target="_blank" href="https://www.google.com/maps/place/HW+Beauty/@30.7227854,-90.5103767,15z/data=!4m5!3m4!1s0x0:0x7a36fbffc983f74!8m2!3d30.7227854!4d-90.5103767">map</a>
            </div>
            <div className="store-description-bottom-right">
              <div className="store-description-bottom-bold">
                <b>Hours</b>
              </div>
              Mon-Sat 9AM - 7:30PM<br/>
              Sunday 10AM - 6PM
            </div>
            <div className="store-phone-number">
              (985) 747-0483
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  render() {
    return (<div className="navbar-cover" id="navbar-cover-mobile">
        {this.storeLocator()}
    </div>
    )
  }
}