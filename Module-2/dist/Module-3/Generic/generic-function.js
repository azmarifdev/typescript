"use strict";
/*
// arrow function
const genFunc = (param: string): string => {
    return param;
};

const genFunc1 = <T>(param: T): T[] => {
    return [param];
};

// function
// function genFunc2<X, Y>(param1: X, param2: Y): [X, Y] {
//     return [param1, param2];
// }

// Arrow Function
const genFunc2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
};

type user = { name: string; age: number };

const result = genFunc('arif');
const result1 = genFunc1<string>('bangladesh');
const result2 = genFunc1<number>(56);
const result3 = genFunc1<boolean>(true);
const result4 = genFunc2<string, number>('azmarif', 45);
const result5 = genFunc2<boolean, Array<number>>(true, [85, 98, 23]);
const result6 = genFunc2<user, boolean>({ name: 'arif', age: 23 }, false);

/// spread operator default

const crush = 'kitty';
const me = {
    name: 'arif',
    age: 33,
};
const spread = { ...me, crush };

/// spread operator function

const addMeInMyCrushMind = <T>(param: T): T => {
    const crushName = 'kitty';
    const newData = { ...param, crushName };
    return newData;
};

type Info = {
    name: string;
    age: number;
    salary: string;
    married: boolean;
};

const myInfo: Info = {
    name: 'arif',
    age: 30,
    salary: '20000 tk',
    married: false,
};

const result7 = addMeInMyCrushMind(myInfo);
*/ 
