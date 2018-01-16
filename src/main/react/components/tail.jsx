import React from 'react';
import {Link} from 'react-router-dom';

export default function Tail() {

  const getLogo = () => {
    return <div className="navbar-tail-logo-container">
      <div className="navbar-tail-logo">HW Beauty</div>
      <div className="navbar-date" id="navbar-date-mobile">321 S 1st St, Amite City, LA</div>
      <div className="navbar-date">(985) 747-0483</div>
    </div>
  };

  const getTailItems = () => {

    return <div className="navbar-menu-items">
    <div className="navbar-menu-container">
      <div className="tail-middle-menu">About Us</div>
      <div className="tail-middle-menu">Shipping Policy</div>
      <div className="tail-middle-menu">Information</div>
      <div className="tail-middle-menu">Customer Service</div>
    </div>
    </div>
  };

  const socialFavicons = () => {
    let faviconLinkHelper = Object.assign({},
      {instagramLink: "https://www.instagram.com/eurasia_tourism/",
      facebook: "https://www.facebook.com/eurasia.tourism",
      whatsApp: "https://api.whatsapp.com/send?phone=905536099043",
      phoneNumber: "tel:+902123693640",}
    )
    let faviconItemsHelper = Object.assign({},
      {instagramFavicon: "fa fa-instagram",
      facebookFavicon: "fa fa-facebook-square",
      whatsAppFavicon: "fa fa-whatsapp",
      phoneNumberFavicon: "fa fa-phone-square",},
    )

    return <div className="navbar-bottom-container" id="navbar-bottom-container-mobile">
      <div className="favicon-container" id="favicon-container-instagram-mobile">
        <a target="_blank" href={`${faviconLinkHelper["instagramLink"]}`} className="favicon">
          <i className={faviconItemsHelper["instagramFavicon"]}aria-hidden="true" />
        </a>
      </div>
      <div className="favicon-container" id="favicon-container-facebook-mobile">
        <a target="_blank" href={`${faviconLinkHelper["facebookFavicon"]}`} className="favicon">
          <i className={faviconItemsHelper["facebookFavicon"]}aria-hidden="true" />
        </a>
      </div>
      <div className="favicon-container" id="favicon-container-whatsapp-mobile">
        <a target="_blank" href={`${faviconLinkHelper["whatsApp"]}`} className="favicon">
          <i className={faviconItemsHelper["whatsAppFavicon"]}aria-hidden="true" />
        </a>
      </div>
      <div className="favicon-container" id="favicon-container-phone-mobile">
        <a target="_blank" href={`${faviconLinkHelper["phoneNumber"]}`} className="favicon">
          <i className={faviconItemsHelper["phoneNumberFavicon"]}aria-hidden="true" />
        </a>
      </div>
    </div>
  }

  return (
    <div className="tail-container">
      <div className="tail-container-widescreen-adjust">
        <div className="tail-top" id="tail-top-mobile">
        {getLogo()}
        </div>
        <div className="tail-middle" id="tail-middle-mobile">
          {getTailItems()}
        </div>
        {socialFavicons()}
      </div>
    </div>
  )
}