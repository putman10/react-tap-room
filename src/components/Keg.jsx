import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  let headerDivStyles = {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto'
  };
  return (
    <div  style={headerDivStyles}>
      <h3>{props.name} - {props.brand}</h3>
      <p><em>${props.price}</em></p>
      <h3>{props.alcoholContent} - {props.pintsLeft}</h3>
      <hr/>
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
