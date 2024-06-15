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
});
