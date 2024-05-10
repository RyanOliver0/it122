// data.js
const items = [
    { shoe: 1, brand: 'Nike', price: 100, color: 'blue', size: '10' },
    { shoe: 2, brand: 'Puma', price: 120, color: 'white', size: '11' },
    { shoe: 3, brand: 'New Balance', price: 130, color: 'grey', size: '12' },
    { shoe: 4, brand: 'Adidas', price: 140, color: 'black', size: '13'}, 
    { shoe: 5, brand: 'Vans', price: 150, color: 'green', size: '14' }
];

export function getAll() {
    return items;
}

export function getItem(shoe) {
    return items.find(item => item.shoe === parseInt(shoe));
}



