import React from 'react';

const ItemList = ({ items, onItemClick }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onItemClick(item)}>
          <a href="#">{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

