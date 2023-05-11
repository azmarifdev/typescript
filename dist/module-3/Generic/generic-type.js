"use strict";
/*
type genericType<T> = Array<T>;

const rollNumber: genericType<number> = [65, 78, 63];
const rollNumber2: genericType<string> = ['azm', 'arif', 'azm arif'];

type ObjectType = {
    name: string;
    roll: number;
};

const userNameAndRollNumber: genericType<ObjectType> = [
    {
        name: 'azm',
        roll: 1,
    },
    {
        name: 'arif',
        roll: 2,
    },
];

// generic tuple

type GenericTupleType<X, Y> = [X, Y];

const relation: GenericTupleType<string, number> = ['azmarif', 56];
const roleAndAddress: GenericTupleType<string, string> = ['admin', 'unknown'];

type ObjectForGeneric = {
    name?: string;
    firstName?: string;
    lastName?: string;
    salary?: number;
};

// -- this is not best practice
// const details: GenericTupleType<object, string> = [
//     { firstName: 'azm', lastName: 'arif' },
//     'azmarif',
// ];

// this is not best practice
const details: GenericTupleType<ObjectForGeneric, string> = [
    { firstName: 'azm', lastName: 'arif' },
    'azmarif',
];

// best practice code here
const salary: GenericTupleType<ObjectForGeneric, boolean> = [
    { name: 'azm arif', salary: 10000 },
    true,
];

*/ 
