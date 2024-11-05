import { Animal } from "./animal.js";
export class Cat extends Animal {
    constructor(fur, isAwake, isMoving) {
      super(2, 4, isAwake, isMoving);
      this.fur = fur;
    }
    speak() {
      super.speak("Meow...");
    }
    toString() {
      return super.toString("Cat");
    }
  }