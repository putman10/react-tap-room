import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import { Link } from 'react-router-dom';
import EditKegForm from './EditKegForm';
import { Switch, Route } from 'react-router-dom';

function Admin(props){
  let containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '10px',
    background: 'white',
    borderLeft: '1px solid black',
    borderRight: '1px solid black'
  };
  let linkStyles = {
    color:'black',
    textDecoration: 'none',
    textTransform: 'uppercase'
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
        <div className="menu-links">
          <Link to="/new-keg" style={linkStyles}>Add New Keg</Link>
        </div>
        <style jsx>{`
        .menu-links{
          margin: 0 auto;
          padding: 10px;
          background: #ffca28;
          border-radius: 4px;
          width: 15%;
          text-align: center;
          border: 1px solid transparent;
        }
        .menu-links:hover{
          background: white;
          border: 1px solid black;
        }
        .menu-links:last-of-type{
          margin-right: 0px;
        }
    `}</style>
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
