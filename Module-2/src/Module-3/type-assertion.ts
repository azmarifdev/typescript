
/*

let assertion: any;
assertion = 'arif';

(assertion as string).length
// <string>assertion.length;


function kgToGram(param: string | number): string | number | undefined
{
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return value;
    } else if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(10) as number;
const resultToBeString = kgToGram('10') as string;
// const resultToBeNumber = <number>kgToGram(10);
// const resultToBeString = <string>kgToGram('10');
type CustomErrorType = {
    message: string;
};

try {
} catch (error) {
    console.log((error as CustomErrorType).message);
}
*/