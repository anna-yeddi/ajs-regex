import Daemon from "../daemon.js";

describe("Daemon", () => {
  const expected = {
    name: "Test",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  };

  it("should be created as an instance of the Daemon class", () => {
    const daemon = new Daemon("Test", "Daemon");

    expect(daemon).toBeInstanceOf(Daemon);
  });

  it("should be created with default data", () => {
    const daemon = new Daemon("Test", "Daemon");

    expect(daemon).toEqual(expected);
  });
});
