import Character from "../character";

describe("character", () => {
  const expected = {
    name: "Test",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: null,
    defense: null,
  };

  it("should be created as an instance of the Character class", () => {
    const bowman = new Character("Test", "Bowman");

    expect(bowman).toBeInstanceOf(Character);
  });

  it("should be created with default data", () => {
    const bowman = new Character("Test", "Bowman");

    expect(bowman).toEqual(expected);
  });

  it("should throw with a short name", () => {
    expect(() => new Character("T", "Bowman")).toThrow(
      "The name should be at least 2 characters long"
    );
  });

  it("should throw with a long name", () => {
    expect(() => new Character("Tyrannosaurus rex", "Bowman")).toThrow(
      "The name should be no more than 10 characters long"
    );
  });

  it("should throw with a number name", () => {
    expect(() => new Character(123, "Bowman")).toThrow(
      "The name should a string"
    );
  });

  it("should throw for a atypical type of character", () => {
    expect(() => new Character("Test", "T-Rex")).toThrow(
      "Unknown character type"
    );
  });

  describe("class methods", () => {
    let bowman;

    beforeEach(() => {
      bowman = new Character("Test", "Bowman");
    });

    describe("levelUp", () => {
      const expectedUp = {
        name: "Test",
        type: "Bowman",
        health: 100,
        level: 2,
        attack: 30,
        defense: 30,
      };

      it("should be able to levelUp the character", () => {
        bowman.attack = 25;
        bowman.defense = 25;
        // By default, this.health = 100:
        bowman.health = 25;

        bowman.levelUp();

        expect(bowman).toEqual(expectedUp);
      });

      it("should throw an error when trying to levelUp a dead character", () => {
        bowman.health = 0;

        expect(() => bowman.levelUp()).toThrow(
          "Cannot level up a dead character"
        );
      });
    });

    describe("damage", () => {
      const expectedDown = {
        name: "Test",
        type: "Bowman",
        health: 93,
        level: 1,
        attack: 25,
        defense: 25,
      };

      it("should be able to access the damage", () => {
        // By default, this.health = 100.
        bowman.attack = 25;
        bowman.defense = 25;

        bowman.damage(10);

        expect(bowman).toEqual(expectedDown);
      });

      it("should throw an error when trying to damage a dead character", () => {
        bowman.health = -10;

        expect(() => bowman.damage(10)).toThrow(
          "Cannot damage a dead character"
        );
      });
    });
  });
});
