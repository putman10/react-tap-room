import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import EditKegForm from './EditKegForm';
import { Switch, Route } from 'react-router-dom';

function Admin(props){
  let containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  if (props.selectedKeg !== null) {
    return (
      <div>
        <Switch>
          <Route path='/' render={()=><EditKegForm
          selectedKeg={props.selectedKeg}
          onDeleteKeg={props.onDeleteKeg}
          onUpdateKeg={props.onUpdateKeg}/>} />
          </Switch>
      </div>
      )
  } else{
    return (
      <div style={containerStyle}>
        <KegList
          currentRouterPath={props.currentRouterPath}
          kegList={props.kegList}
          onDeleteKeg={props.onDeleteKeg}
          onEditKeg={props.onEditKeg}
          />
      </div>
    );
  }
}

Admin.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onDeleteKeg: PropTypes.func,
  onEditKeg: PropTypes.func,
  selectedKeg: PropTypes.object,
  onUpdateKeg: PropTypes.func
};

export default Admin;
