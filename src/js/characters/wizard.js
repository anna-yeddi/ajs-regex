import Character from "./character.js";

export default class Wizard extends Character {
  constructor(name) {
    super(name, "Wizard");

    this.attack = 10;
    this.defense = 40;
  }
}
