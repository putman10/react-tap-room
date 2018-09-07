import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../public/images/kombucha-logo.png'



function Header(){
  return (
    <div>
      <img src={image} alt="Kombuch on Tap Logo"/>
      <h1>Kombucha On Tap</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
