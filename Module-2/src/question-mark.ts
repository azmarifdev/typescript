const age: number = 18;

if (age >= 25) {
    // console.log('old');
} else if (age >= 18) {
    // console.log('adult');
} else {
    // console.log('child');
}

if (age >= 18) {
    // console.log('adult');
} else {
    // console.log('child');
}

const result = age >= 18 ? 'adult' : 'child';
// console.log('result -->', result);

// null and undefined
const isAuthenticatedUser = '';
const userName = isAuthenticatedUser ?? 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
// console.log({ userName }, { userName2 });

type man = {
    array: number[],
    name: string;
    age: number;
    address: {
        city: 'No city';
        road: 'No road';
        home?: '';
    };
};

const man1: man = {
    array: [45, 65],
    name: 'arif',
    age: 18,
    address: {
        city: 'No city',
        road: 'No road',
    },
};

const home = man1?.address?.home ?? 'No home';
console.log('home', home);

let obj: Object = {key: 'value'}
let obj2: {} = {key: 'value'}
console.log("obj", obj);
console.log("obj2", obj2);
