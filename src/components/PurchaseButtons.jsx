import React from 'react';
import PropTypes from 'prop-types';

function PurchaseButtons(props){

  function handleSellingKombucha(keg, size){
    props.onSellingKombucha(keg, size);
  }

  return(
    <div>
      <button className="submit-button" onClick={() =>handleSellingKombucha(props.keg, "Pint")}>Sell Pint</button>
      <button className="submit-button" onClick={() =>handleSellingKombucha(props.keg, "Small Growler")}>Sell Small Growler</button>
      <button className="submit-button" onClick={() =>handleSellingKombucha(props.keg, "Large Growler")}>Sell Large Growler</button>
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
        .submit-button:hover{
          background: black;
          color:white;
        }
    `}</style>
    </div>
  )
}

PurchaseButtons.propTypes = {
  onSellingKombucha: PropTypes.func,
  keg: PropTypes.Object
};

export default PurchaseButtons;
