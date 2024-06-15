import Undead from "../undead.js";

describe("Undead", () => {
  const expected = {
    name: "Test",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  };

  it("should be created as an instance of the Undead class", () => {
    const undead = new Undead("Test", "Undead");

    expect(undead).toBeInstanceOf(Undead);
  });

  it("should be created with default data", () => {
    const undead = new Undead("Test", "Undead");

    expect(undead).toEqual(expected);
  });
});
