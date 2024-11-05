import { Animal } from "./animal.js";
export class Cow extends Animal {
    constructor(hair, isAwake, isMoving) {
      super(2, 4, isAwake, isMoving);
      this.hair = hair;
    }
    speak() {
      super.speak("Moo.");
    }
    toString() {
      return super.toString("Cow");
    }
  }