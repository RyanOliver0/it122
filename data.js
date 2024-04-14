// data.js
const items = [
    { id: 1, name: 'Car', brand: 'Tesla', price: 80000, color: 'black' },
    { id: 2, name: 'Guitar', brand: 'Fender', price: 1500, type: 'electric' },
    { id: 3, name: 'Phone', brand: 'Samsung', price: 1000, color: 'blue' },
    { id: 4, name: 'Computer', brand: 'Apple', price: 2000, screenSize: '15 inches' },
    { id: 5, name: 'Shoe', brand: 'Nike', price: 120, color: 'white' }
];

export function getAll() {
    return items;
}

export function getItem(key) {
    return items.find(item => item.id === key);
}
