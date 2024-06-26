import getAttackModes from "../getAttackModes";

describe("getAttackModes", () => {
  let character;
  let expected;

  beforeEach(() => {
    character = {
      name: "Archer",
      type: "Bowman",
      health: 50,
      level: 3,
      attack: 40,
      defense: 10,
      special: [
        {
          id: 8,
          name: "Double shot",
          icon: "http://...",
          description: "Double shot makes a double impact",
        },
        {
          id: 9,
          name: "Knockout shot",
          icon: "http://...",
          // <- note that the description is still hidden
        },
      ],
    };
    expected = [
      {
        id: 8,
        name: "Double shot",
        icon: "http://...",
        description: "Double shot makes a double impact",
      },
      {
        id: 9,
        name: "Knockout shot",
        icon: "http://...",
        description: "Description is not available yet",
      },
    ];
  });

  it("returns an array of objects that include four properties of an attack", () => {
    // Remove the last attack mode with id=9 to test the basic behavior
    character.special.pop();
    // Remove the last attack mode to test the basic behavior
    expected.pop();

    expect(getAttackModes(character)).toEqual(expected);
  });

  it("adds a default description if none is provided", () => {
    expect(getAttackModes(character)).toEqual(expected);
  });

  it("returns an attack mode information only", () => {
    // Add extra information to a character to be filtered out
    character.special[0].something = "Else";
    character.special[1].foo = "bar";
    expect(getAttackModes(character)).toEqual(expected);
  });

  it("returns only an attack mode information", () => {
    // Remove an attack information from a character to be filtered out
    delete character.special[0].id;
    delete character.special[1].name;

    expect(getAttackModes(character)).toEqual([]);
  });
});
