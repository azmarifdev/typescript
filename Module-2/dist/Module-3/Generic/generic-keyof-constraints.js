"use strict";
const a = 'name';
const b = 'age';
// function with keyof
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: 'arif', age: 100 }, 'age');
