// Arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

// Object destructuring
let user = {
    username: 'Jose',
    age: '20'
};
let { username, age } = user;
console.log(username, age);



// Spread operator
let person = { name: 'Jose', age: 20 }
let country = 'MX';

let data = { id: 1, ...person, country };

console.log(data);

// Rest operator

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(10,1,2,3,4)