import getHealth from "../getHealth";

const characters = [
  [{ name: "wizard", health: 90 }, "healthy"],
  [{ name: "swordbearer", health: 30 }, "wounded"],
  [{ name: "archer", health: 10 }, "critical"],
];

test.each(characters)(
  "should return health level of the character %s as: %s",
  ({ name, health }, expected) => {
    const response = getHealth({ name, health });

    expect(response).toBe(expected);
  }
);
