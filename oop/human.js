import { Animal } from "./animal.js";
export class Human extends Animal {
    constructor(hair, isAwake, isMoving, name, age, occupation) {
        super(2, 2, isAwake, isMoving);
        this.hair = hair;
        this.name = name;
        this.age = age;
        this.occupation = occupation
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}, and I'm a ${this.age}-year-old ${this.occupation}`);
    }
}