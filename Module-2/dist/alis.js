"use strict";
const crush1 = {
    name: 'Moina pakhi',
    age: 22,
    profession: 'web developer',
    address: 'uganda',
};
const crush2 = {
    name: 'Sona pakhi',
    profession: 'app developer',
    address: 'brazil',
};
const isMarried = false;
const courseName = 'next level web development';
const calculateFunc = (num1, num2, operation) => {
    return operation(num1, num2);
};
calculateFunc(10, 20, (x, y) => x + y);
console.log(calculateFunc);
