import Wizard from "../wizard.js";

describe("Wizard", () => {
  const expected = {
    name: "Test",
    type: "Wizard",
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  };

  it("should be created as an instance of the Wizard class", () => {
    const wizard = new Wizard("Test", "Wizard");

    expect(wizard).toBeInstanceOf(Wizard);
  });

  it("should be created with default data", () => {
    const wizard = new Wizard("Test", "Wizard");

    expect(wizard).toEqual(expected);
  });
});
