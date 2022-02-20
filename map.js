const numbers = [4, 6, 8, 10];
const output1 = [];

const doubleIt = number => number * 2

for (const number of numbers) {
    const result = doubleIt(number);
    output1.push(result);
}
console.log(output1);



const output = numbers.map(x => x * 2);
// another way
const square=numbers.map(x=>x*x);
console.log(square);