class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`;
    }
}

class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}

const student1 = new Student('Mr.X', 19, 'jamalpur');

const studentLog = student1.makeSleep(56);
console.log('studentLog', studentLog);

class Teacher extends Parent {
    designation: string;

    constructor(
        name: string,
        age: number,
        address: string,
        designation: string,
    ) {
        super(name, age, address);
        this.designation = designation;
    }
}

const teacher1 = new Teacher('Mr. T', 89, 'uganda', 'sir');
console.log(teacher1.makeSleep(77));
