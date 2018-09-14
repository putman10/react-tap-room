import React from 'react';
import PropTypes from 'prop-types';

function EditKegForm(props){
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
  let spanStyles = {
    color: 'red'
  };
  function handleDeleteKeg(id){
    props.onDeleteKeg(id);
  }

  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;

  function handleUpdatingKeg(selectedId){
    props.onUpdateKeg({
      name: _name.value,
      brand: _brand.value,
      id: selectedId,
      price: _price.value,
      alcoholContent: _alcoholContent.value,
      pintsLeft: '168'
    });
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
  }


  return (
    <div style={headerDivStyles}>
      <form onSubmit={() =>handleUpdatingKeg(props.selectedKeg.id)} style={formStyles}>
        <h1>Edit <span style={spanStyles}>{props.selectedKeg.name}</span> Kombucha:</h1>
        <input style={inputStyles}
          type='text'
          id='name'
          defaultValue={props.selectedKeg.name}
          ref = {(input) =>{_name = input;}}/>
        <input style={inputStyles}
          type='text'
          id='brand'
          defaultValue={props.selectedKeg.brand}
          ref = {(input) =>{_brand = input;}}/>
        <input style={inputStyles}
          type='text'
          id='price'
          defaultValue={props.selectedKeg.price}
          ref = {(input) =>{_price = input;}}/>
        <input style={inputStyles}
          type='text'
          id='alcoholContent'
          defaultValue={props.selectedKeg.alcoholContent}
          ref = {(input) =>{_alcoholContent = input;}}/>
        <button className="submit-button"  type='submit'>Submit Edits</button>
        <button onClick={() =>handleDeleteKeg(props.selectedKeg.id)} className="delete-button"  type='submit'>Delete Keg</button>
      </form>
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
}

EditKegForm.propTypes = {
  selectedKeg: PropTypes.object,
  onDeleteKeg: PropTypes.func,
  onUpdateKeg: PropTypes.func
};

export default EditKegForm;
