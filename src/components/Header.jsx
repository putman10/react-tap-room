import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../public/images/kombucha-logo.png';
import './styles/Header.css'

function Header(){
  let headerDivStyles = {
    textAlign: 'center',
    background: 'black',
    padding: '20px'
  };
  let logoStyles = {
    width: '200px',
    marginBottom: '20px'
  };
  let linkStyles = {
    color:'black',
    textDecoration: 'none',
    marginRight: '10px',
    padding: '10px',
    background: '#ffca28',
    borderRadius: '4px'
  };
  return (
    <div style={headerDivStyles}>
      <img style={logoStyles} src={image} alt="Kombuch on Tap Logo"/>
      <div>
        <Link style={linkStyles} to="/">Home</Link>
        <Link style={linkStyles} to="/new-keg">Add New Keg</Link>
      </div>
    </div>
  );
}

export default Header;
