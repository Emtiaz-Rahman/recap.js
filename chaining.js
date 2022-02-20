const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
console.log(x, b);


// destructing Array
const [x, y,...z] = [45, 12, 37, 50];
console.log(x, y,z);


const {sky,blue} = { sky: 'blue', soil: 'matti', color: 'red', money: '500' };
console.log(sky);