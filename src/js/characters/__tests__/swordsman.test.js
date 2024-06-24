import Swordsman from "../swordsman.js";

describe("Swordsman", () => {
  const expected = {
    name: "Test",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defense: 100,
  };

  it("should be created as an instance of the Swordsman class", () => {
    const swordsman = new Swordsman("Test");

    expect(swordsman).toBeInstanceOf(Swordsman);
  });

  it("should be created with default data", () => {
    const swordsman = new Swordsman("Test");

    expect(swordsman).toEqual(expected);
  });
});
