// arrow function

const genFunc = (param: string): string => {
    return param;
};

const genFunc1 = <T>(param: T): T[] => {
    return [param];
};



const result = genFunc('arif');
const result1 = genFunc1<string>('bangladesh');
const result2 = genFunc1<number>(56);
const result3 = genFunc1<boolean>(true);
