/*
interface CrushInterface<T, U, V = null> {
    name: string;
    husband?: T;
    wife: U;
    other?: V;
}

const crush1: CrushInterface<boolean, number> = {
    name: 'kitty',
    husband: true,
    wife: 2,
};

// this is not best practice
// const crush2: CrushInterface<object, object> = {
//     name: 'caddy',
//     husband: {
//         name: 'kate',
//         address: 'unknown',
//         age: 30,
//     },
//     wife: {
//         age: 25,
//         salary: '20,000 tk',
//     },
// };

// best practice here

interface Object1 {
    name: string;
    address: string;
    age: number;
}

interface Object2 {
    age: number;
    salary: string;
}

const crush2: CrushInterface<Object1, Object2> = {
    name: 'caddy',
    husband: {
        name: 'kate',
        address: 'unknown',
        age: 30,
    },
    wife: {
        age: 25,
        salary: '20,000 tk',
    },
};
*/