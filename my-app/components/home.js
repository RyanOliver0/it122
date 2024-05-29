import React, { useState } from 'react';
import ItemList from './itemlist';
import Detail from './detail';

const Home = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>Items List</h1>
      <ItemList items={items} onItemClick={handleItemClick} />
      {selectedItem && <Detail item={selectedItem} />}
    </div>
  );
};

export default Home;
