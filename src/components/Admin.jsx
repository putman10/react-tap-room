import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function Admin(props){
  let containerStyle = {
    maxWidth: '1200px',
    margin: '2rem auto',
  };
  return (
    <div style={containerStyle}>
      <KegList
        currentRouterPath={props.currentRouterPath}
        kegList={props.kegList}
        />
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
