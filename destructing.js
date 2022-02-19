const fish = {
    id: 58, name: 'King Elisha', price: 9000,
    phone: '0171700000', address: 'Barishal', dress: 'silver'
};

const phone = fish.phone;
console.log(phone);

const { price, phone, dress } = fish;
console.log(phone);
