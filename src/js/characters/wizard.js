import Character from "./character.js";

export default class Wizard extends Character {
  constructor(name, type) {
    super(name, type);

    this.attack = 10;
    this.defense = 40;
  }
}
