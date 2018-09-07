import React from 'react';

function NewKegForm(){
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
      <form style={formStyles}>
        <h1>Add a New Keg Form:</h1>
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

export default NewKegForm;
