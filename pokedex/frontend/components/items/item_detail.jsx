import React from 'react';

const ItemDetail = props => (
  <div>
    <h3>{props.item.name}</h3>
    <div className='item-details'>
    Happiness: {props.item.happiness}<br/>
  Price:{props.item.price}
    </div>
  </div>
);

export default ItemDetail;
