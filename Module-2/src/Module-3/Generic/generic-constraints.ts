/*
type Mandatory = {
    name: string;
    age: number;
};
const addMeInMyCrushMind = <T extends Mandatory>(param: T): T => {
    const crushName = 'kitty';
    const newData = { ...param, crushName };
    return newData;
};

type Info = {
    name: string;
    age: number;
    salary: string;
    married: boolean;
    phone: number;
    address: string;
};

const myInfo: Info = {
    name: 'arif',
    age: 30,
    salary: '20000 tk',
    married: false,
    phone: +8801742363024,
    address: 'unknown',
};

const result7 = addMeInMyCrushMind(myInfo);
*/