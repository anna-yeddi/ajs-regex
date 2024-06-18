const types = ["Bowman", "Swordsman", "Wizard", "Undead", "Zombie", "Daemon"];

export default class Character {
  constructor(name, type) {
    if (typeof name !== "string") {
      throw new Error("The name should a string");
    }
    if (name.length < 2) {
      throw new Error("The name should be at least 2 characters long");
    } else if (name.length > 10) {
      throw new Error("The name should be no more than 10 characters long");
    }
    this.name = name;
    if (!types.includes(type)) {
      throw new Error("Unknown character type");
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defense = null;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("Cannot level up a dead character");
    }
    this.health = 100;
    this.level++;
    this.attack = this.attack * 1.2;
    this.defense = this.defense * 1.2;

    return this;
  }
}
