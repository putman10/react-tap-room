import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/kombucha-logo.png'


function Header(){
  return (
    <div>
      <img src={logo} alt="Kombuch on Tap Logo"/>
      <h1>Kombucha On Tap</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
