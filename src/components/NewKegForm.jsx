import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;

  function handleAddNewKeg(event){
    event.preventDefault();
    props.onNewKegCreation({
      name: _name.value,
      brand: _brand.value,
      price: _price.value,
      alcoholContent: _alcoholContent.value,
      pintsLeft: "168",
      id: v4()
    });
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
  }

  let headerDivStyles = {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'white',
    padding: '10px 0 30px 0',
    border: '1px solid black',
    borderTop: '0'
  };
  let inputStyles = {
    width: '90%',
    margin: '10px auto',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '15px'
  };
  let formStyles = {
    textAlign: 'center'
  };
  let buttonStyle = {
    display: 'block',
    margin: '0 auto'
  };
  return (
    <div style={headerDivStyles}>
      <form onSubmit={handleAddNewKeg} style={formStyles}>
        <h1>Add a New Keg Form:</h1>
        <input style={inputStyles}
          type='text'
          id='name'
          placeholder='Name'
          ref = {(input) =>{_name = input;}}/>
        <input style={inputStyles}
          type='text'
          id='brand'
          placeholder='Brand'
          ref = {(input) =>{_brand = input;}}/>
        <input style={inputStyles}
          type='text'
          id='price'
          placeholder='Price per Pint'
          ref = {(input) =>{_price = input;}}/>
        <input style={inputStyles}
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content'
          ref = {(input) =>{_alcoholContent = input;}}/>
        <button className="submit-button" style={buttonStyle} type='submit'>Add New Keg to Inventory</button>
        <style jsx>{`
        .submit-button{
          margin-right: 10px;
          padding: 10px;
          background: #ffca28;
          border-radius: 4px;
          max-width: 150px;
          display: inline-block;
        }
        .submit-button:hover{
          background: black;
          color:white;
        }
    `}</style>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
