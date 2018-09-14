import React from 'react';
import PropTypes from 'prop-types';

function NewKegConfirmation(props){
  let div = {
    paddingTop: '125px',
    textAlign: 'center',
    height: '100%'
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
