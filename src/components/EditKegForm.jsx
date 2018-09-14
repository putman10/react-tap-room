import React from 'react';
import PropTypes from 'prop-types';

function EditKegForm(){
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


  return (
    <div style={headerDivStyles}>
      <form style={formStyles}>
        <h1>Edit an Existing Keg Form:</h1>
        <input style={inputStyles}
          type='text'
          id='name'
          placeholder='Name'/>
        <input style={inputStyles}
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input style={inputStyles}
          type='text'
          id='price'
          placeholder='Price per Keg'/>
        <input style={inputStyles}
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content'/>
        <button className="submit-button"  type='submit'>Submit Edits</button>
        <button className="submit-button"  type='submit'>Delete Keg</button>
        <style jsx>{`
        .submit-button{
          display: inline-block;
          margin-right: 10px;
          padding: 10px;
          background: #ffca28;
          border-radius: 4px;
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

EditKegForm.propTypes = {
  selectedKeg: PropTypes.object
};

export default EditKegForm;
