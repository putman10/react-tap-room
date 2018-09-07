import React from 'react';

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
  let buttonStyle = {
    display: 'block',
    margin: '0 auto'
  }
  return (
    <div style={headerDivStyles}>
      <form style={formStyles}>
        <h1>Edit an Existing Keg Form:</h1>
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
        <button className="submit-button" style={buttonStyle} type='submit'>Submit Changes</button>
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

export default EditKegForm;
