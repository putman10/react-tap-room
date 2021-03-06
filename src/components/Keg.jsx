import React from 'react';
import PropTypes from 'prop-types';
import PurchaseButtons from './PurchaseButtons';

function Keg(props){
  let headerDivStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'white',
    padding: '10px',
    border: '1px solid black',
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0'
  };
  let h3Style = {
    marginTop: '0px',
  };
  let nameSpanStyle = {
    fontSize: '30px'
  };
  let kegInformation =
    <div>
      <h3 style={h3Style}><span style={nameSpanStyle}>{props.name}</span> - {props.brand}</h3>
      <p><em>${props.price}</em></p>
      <p><b>Alcohol Content:</b> {props.alcoholContent}%</p>
      <p><b>Pints Left in Keg:</b> {props.pintsLeft}</p>
    </div>;

  function handleEditKeg(id){
    props.onEditKeg(id);
  }

  function handleDeleteKeg(id){
    props.onDeleteKeg(id);
  }

  if(props.currentRouterPath === '/admin'){
    return(
      <div style={headerDivStyles}>
        {kegInformation}
        <PurchaseButtons
          onSellingKombucha={props.onSellingKombucha}
          keg={props.keg}
        />
        <button className="submit-button" onClick={() =>handleEditKeg(props.kegId)}>Edit</button>
        <button className="delete-button" onClick={() =>handleDeleteKeg(props.kegId)}>Delete</button>
        <style jsx>{`
          .submit-button{
            display: inline-block;
            margin-right: 10px;
            padding: 10px;
            background: #ffca28;
            border-radius: 4px;
            text-transform: uppercase;
            font-weight:700;
          }
          .delete-button{
            display: inline-block;
            margin-right: 10px;
            padding: 10px;
            background: #c50404;
            border-radius: 4px;
            color:white;
            text-transform: uppercase;
            font-weight:700;
          }
          .submit-button:hover,
          .delete-button:hover{
            background: black;
            color:white;
          }
      `}</style>
      </div>
    );
  } else {
    return(
      <div style={headerDivStyles}>
        {kegInformation}
      </div>

    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  kegId:PropTypes.string,
  alcoholContent: PropTypes.string.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  currentRouterPath: PropTypes.string,
  onDeleteKeg: PropTypes.func,
  onEditKeg: PropTypes.func,
  onSellingKombucha: PropTypes.func,
  keg: PropTypes.object
};

export default Keg;
