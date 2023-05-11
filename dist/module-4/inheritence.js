"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('Mr.X', 19, 'jamalpur');
const studentLog = student1.makeSleep(56);
console.log('studentLog', studentLog);
class Teacher {
    constructor(name, age, address, designation) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
    takeClass(numOfClass) {
        return `This ${this.name} will will for ${numOfClass}`;
    }
}
