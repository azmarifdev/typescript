"use strict";
class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal('Garman shepard', 'dog', 'Ghew Ghew');
dog.makeSound();
