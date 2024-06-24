import Zombie from "../zombie.js";

describe("Zombie", () => {
  const expected = {
    name: "Test",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  };

  it("should be created as an instance of the Zombie class", () => {
    const zombie = new Zombie("Test");

    expect(zombie).toBeInstanceOf(Zombie);
  });

  it("should be created with default data", () => {
    const zombie = new Zombie("Test");

    expect(zombie).toEqual(expected);
  });
});
