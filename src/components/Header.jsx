import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../public/images/kombucha-logo.png';
import './styles/Header.css';

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
    textTransform: 'uppercase'
  };
  return (
    <div style={headerDivStyles}>
      <img style={logoStyles} src={image} alt="Kombuch on Tap Logo"/>
      <div>
        <div className="menu-links">
          <Link to="/" style={linkStyles}>Home</Link>
        </div>
        <div className="menu-links" >
          <Link to="/new-keg" style={linkStyles}>Add New Keg</Link>
        </div>
        <div className="menu-links" >
          <Link to="/admin" style={linkStyles}>Admin</Link>
        </div>
        <style jsx>{`
        .menu-links{
          margin-right: 10px;
          padding: 10px;
          background: #ffca28;
          border-radius: 4px;
          max-width: 180px;
          display: inline-block;
        }
        .menu-links:hover{
          background: white;
        }
        .menu-links:last-of-type{
          margin-right: 0px;
        }
    `}</style>
      </div>
    </div>
  );
}

export default Header;
