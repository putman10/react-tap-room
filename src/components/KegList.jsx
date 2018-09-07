import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    name: 'Dragon Fruit',
    brand: 'Happy Mountain',
    price: '5',
    alcoholContent: '.05',
    pintsLeft: '143'
  },
  {
    name: 'Strawberry Melon',
    brand: 'Happy Mountain',
    price: '6',
    alcoholContent: '.05',
    pintsLeft: '121'
  },
  {
    name: 'Dragon Fruit',
    brand: 'Stormy Lake',
    price: '5',
    alcoholContent: '.03',
    pintsLeft: '53'
  },
  {
    name: 'Dragon Fruit',
    brand: 'Angry River',
    price: '4',
    alcoholContent: '.02',
    pintsLeft: '89'
  },
];

function KegList(){
  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
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

export default KegList;
