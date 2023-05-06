// normal function with default parameter
function add(num1: number, num2: number = 10): number {
    return num1 + num2;
}

// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

// callback function
const arr = [3, 6, 4, 9];
const newArr = arr.map((elem: number) => elem + elem);

// object function
const person: {
    name: string;
    balance: number;
    newBalance(money: number): void;
} = {
    name: 'arif',
    balance: 5,
    newBalance(money: number) {
        return `my new balance of ${this.balance + money}`;
    },
};

// spreed operator

const myFriends = ['azm', 'arif'];
const newFriends = ['azmarif'];

myFriends.push(...newFriends);
// console.log('myFriends', myFriends);

const [ bestFriend ] = myFriends
// console.log("bestFriend", bestFriend);

const myBestFriend = {
    fullName: 'siddik',
    age: 21
}
const {fullName} = myBestFriend
console.log("fullName", fullName);





// rest parameter

const greetFriends = (...friends: string[]): void =>
    friends.forEach((friend) => {
        console.log(`hi ${friend}`);
    });

greetFriends('azm', 'arif', 'azmarif', 'ami', 'tomi');
