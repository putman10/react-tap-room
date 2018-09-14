import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';


function KegList(props){
  return (
    <div>
      {Object.keys(props.kegList).map(function(kegId) { let keg = props.kegList[kegId];
        return <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pintsLeft={keg.pintsLeft}
          key={keg.id}
          id={keg.id}
          currentRouterPath={props.currentRouterPath}
          onDeleteKeg={props.onDeleteKeg}
          onEditKeg={props.onEditKeg}
          />;
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onDeleteKeg: PropTypes.func,
  onEditKeg: PropTypes.func
};

export default KegList;
