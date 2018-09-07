import React from 'react';

function NewKegForm(){
  let headerDivStyles = {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'white',
    padding: '10px',
    border: '1px solid black',
    borderTop: '0',
    borderBottom: '0'
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
  }
  return (
    <div style={headerDivStyles}>
      <form style={formStyles}>
        <h1>Add a New Keg Form:</h1>
        <input style={inputStyles}
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input style={inputStyles}
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea style={inputStyles}
          id='issue'
          placeholder='Describe your issue.'/>
        <button style={buttonStyle} type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewKegForm;
