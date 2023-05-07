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


