const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumber = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 10);
// console.log(smallNumber);


const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 25, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }

];

const expensive = products.filter(product => product.price > 100);
const colorProduct = products.filter(product => product.color == 'black');
console.log(colorProduct);

const expensive = products.find(product => product.price > 100);
const colorProduct = products.find(product => product.color == 'black');
console.log(expensive);