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
          key={kegId}
          kegId={kegId}
          currentRouterPath={props.currentRouterPath}
          onDeleteKeg={props.onDeleteKeg}
          onEditKeg={props.onEditKeg}
          onSellingKombucha={props.onSellingKombucha}
          keg={keg}
          />;
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onDeleteKeg: PropTypes.func,
  onEditKeg: PropTypes.func,
  onSellingKombucha: PropTypes.func
};

export default KegList;
