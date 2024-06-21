const types = ["Bowman", "Swordsman", "Wizard", "Undead", "Zombie", "Daemon"];

export default class Character {
  constructor(name, type) {
    if (typeof name !== "string") {
      throw new Error("The name should a string");
    }

    if (name.length < 2) {
      throw new Error("The name should be at least 2 characters long");
    }

    if (name.length > 10) {
      throw new Error("The name should be no more than 10 characters long");
    }

    if (!types.includes(type)) {
      throw new Error("Unknown character type");
    }

    this.name = name;
    this.type = type;

    this.health = 100;
    this.level = 1;

    this.attack = null;
    this.defense = null;
  }

  /**
   * Method to update the level of the character, increase their attack and
   * defense parameters, and refill their health.
   *
   * @returns {Character}
   */
  levelUp() {
    if (this.health === 0) {
      throw new Error("Cannot level up a dead character");
    }

    this.health = 100;

    this.level++;
    this.attack *= 1.2;
    this.defense *= 1.2;

    // return this;
  }

  /**
   * Method to update the character health parameters after it was damaged.
   *
   * @param {Number} points - the level of damage for the character
   * @returns {Character}
   */
  damage(points) {
    if (this.health < 0) {
      throw new Error("Cannot damage a dead character");
    }

    this.health -= points * (1 - this.defense / 100);
    // Ensure only integers are used:
    this.health = Math.round(this.health);

    // return this;
  }
}
