const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
// console.log('arrayOfStrings', arrayOfStrings);

// const obj = {
//     name: 'arif',
//     age: 56,
// };

// console.log(obj['name']);
type AreaNumber = {
    height: number;
    width: number;
};

type A = AreaNumber['height'];

const Area: AreaNumber = {
    height: 10,
    width: 12,
};

Area.height = 15;

type AreaReadOnly = {
    readonly height: number;
    readonly width: number;
};

const AreaRead: AreaReadOnly = {
    height: 10,
    width: 12,
};

// AreaRead.height= 65

type AreaNumberNew = {
    height: number;
    width: number;
};

type AreaStringNew = {
    height: string;
    width: string;
};

type Volume = {
    height: number;
    width: number;
    depth: number;
};

// type AreaVolume = {
//     [ key in keyof Volume ]: Volume[key];
// };

type AreaGeneric<T> = {
    readonly [key in keyof T]: T[key];
};

const area: AreaGeneric<Volume> = {
    height: 56,
    width: 98,
    depth: 78,
};

// area.depth = 88
