import React from 'react';
import PropTypes from 'prop-types';

function NewKegConfirmation(props){
  let div = {
    paddingTop: '20px',
    textAlign: 'center',
    height: '100%',
    background: '#ffffffd4',
    margin: '0 auto',
    maxWidth: '1200px'
  };
  return(
    <div style={div}>
      <h4>Are you sure you want create a new keg?</h4>
      <button onClick={props.onNewKegConfirmation}>Yes!</button>
    </div>
  );
}

NewKegConfirmation.propTypes = {
  onNewKegConfirmation: PropTypes.func
};

export default NewKegConfirmation;
