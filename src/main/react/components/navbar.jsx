import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  getLogo() {
    return <Link to={"/"}>
      <div className="navbar-logo" id="navbar-logo-mobile">
        HW Beauty
      </div>
    </Link>
  };

  getMenuItems() {
    return <div className="site-menu-component">
      <div className="menu-component">Sign In</div>
      <div className="menu-component">Shopping Cart (0)</div>
      <div className="menu-component">Store Locator</div>
    </div>;
  }

  getProductMenuItems() {
    return <div className="product-menu-component">
      <div className="subMenu-left-container">
        <div className="product-submenu">Cosmetics</div>
        <div className="product-submenu">Virgin Hair</div>
        <div className="product-submenu">Wigs</div>
        <div className="product-submenu">Special Promotions</div>
        <div className="product-submenu" id="in-store-deals-button">In Store Deals</div>
      </div>
      <div className="social-icons">
        <a target="_blank" href="https://www.facebook.com/eurasia.tourism" className="favicon product-submenu">
          <i className="fa fa-facebook-square navbar-top-social-icon-component" aria-hidden="true" />
        </a>
        <a target="_blank" href="https://www.instagram.com/eurasia_tourism" className="favicon product-submenu">
          <i className="fa fa-instagram navbar-top-social-icon-component" aria-hidden="true" />
        </a>
        <a target="_blank" href="tel:+902123693640" className="favicon product-submenu">
          <i className="fa fa-phone-square navbar-top-social-icon-component" aria-hidden="true" />
        </a>
        <a target="_blank" href="https://www.google.com/maps/place/HW+Beauty/@30.7227854,-90.5103767,15z/data=!4m5!3m4!1s0x0:0x7a36fbffc983f74!8m2!3d30.7227854!4d-90.5103767" className="favicon product-submenu">
          <i className="fa fa-map-marker navbar-top-social-icon-component" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  }

  render() {
    return (<div className="navbar-cover" id="navbar-cover-mobile">
        <div className="navbar-container" id="navbar-container-mobile">
          {this.getLogo()}
          {this.getMenuItems()}
          {this.getProductMenuItems()}
        </div>
      </div>
    )
  }
}