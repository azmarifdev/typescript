"use strict";
/*
// nullable
const searchName = (value: string | null) => {
    if (value === null) {
        console.log('there is nothing to search');
    } else {
        console.log('searching');
    }
};

// searchName(null);

// unknown

const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(convertedSpeed);
    } else if (typeof speed === 'string') {
        const [value, unit] = speed.split(' ');
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(convertedSpeed);
    } else {
        console.log('this type is wrong');
    }
};

getMyCarSpeed(10);
// getMyCarSpeed('10 km^1');
// getMyCarSpeed(true);

// never
function throwError(message: string): never {
    throw new Error(message);
}
// throwError('This error for testing purposes');
*/ 
