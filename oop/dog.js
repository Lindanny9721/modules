import { Animal } from "./animal.js";
export class Dog extends Animal {
    constructor(fur, isAwake, isMoving) {
      super(2, 4, isAwake, isMoving);
      this.fur = fur;
    }
    speak() {
      super.speak("Woof!");
    }
    toString() {
      return super.toString("Dog");
    }
  }