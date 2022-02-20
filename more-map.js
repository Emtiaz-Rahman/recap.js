const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLength = friends.map(friend => friend.length);
// console.log(fLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 25, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }

]
const productName = products.filter(product => product.price <60);
const productPrice=productName.map(price1=>price1.price)
console.log(productPrice);

products.map(product => console.log(product));
products.forEach(product => console.log(product));