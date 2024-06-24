import Bowman from "../bowman.js";

describe("Bowman", () => {
  const expected = {
    name: "Test",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  };

  it("should be created as an instance of the Bowman class", () => {
    const bowman = new Bowman("Test");

    expect(bowman).toBeInstanceOf(Bowman);
  });

  it("should be created with default data", () => {
    const bowman = new Bowman("Test");

    expect(bowman).toEqual(expected);
  });
});
