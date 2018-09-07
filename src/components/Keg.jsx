import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  let headerDivStyles = {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'white',
    padding: '10px',
    border: '1px solid black',
    borderTop: '0'
  };
  let h3Style = {
    marginTop: '0px',
  };
  let nameSpanStyle = {
    fontSize: '30px'
  };
  return (
    <div style={headerDivStyles}>
      <h3 style={h3Style}><span style={nameSpanStyle}>{props.name}</span> - {props.brand}</h3>
      <p><em>${props.price}</em></p>
      <p><b>Alcohol Content:</b> {props.alcoholContent}%</p>
      <p><b>Pints Left in Keg:</b> {props.pintsLeft}</p>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsLeft: PropTypes.string.isRequired
};

export default Keg;
