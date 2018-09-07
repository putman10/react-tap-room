import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../public/images/kombucha-logo.png';
import './styles/Header.css'

function Header(){
  return (
    <div className="headerDivStyles">
      <img className="logoStyles" src={image} alt="Kombuch on Tap Logo"/>
      <div>
        <Link className="linkStyles" to="/">Home</Link>
        <Link className="linkStyles" to="/new-keg">Add New Keg</Link>
      </div>
    </div>
  );
}

export default Header;
