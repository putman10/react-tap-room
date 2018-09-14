import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';


function KegList(props){
  return (
    <div>
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pintsLeft={keg.pintsLeft}
          key={index}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
