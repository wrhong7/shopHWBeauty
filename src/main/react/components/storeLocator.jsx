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
      <div className="locationDescription">XYZ</div>
    </div>
  }

  render() {
    return (<div className="navbar-cover" id="navbar-cover-mobile">
        {this.storeLocator()}
    </div>
    )
  }
}