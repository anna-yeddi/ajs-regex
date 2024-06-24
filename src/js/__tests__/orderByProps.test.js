import orderByProps from "../orderByProps";
import Bowman from "../characters/bowman";

describe("orderByProps", () => {
  let bowman;

  beforeEach(() => {
    bowman = new Bowman("Test");
  });

  it("should sort in an alphabetic order by default", () => {
    const expected = [
      { key: "attack", value: 25 },
      { key: "defense", value: 25 },
      { key: "health", value: 100 },
      { key: "level", value: 1 },
      { key: "name", value: "Test" },
      { key: "type", value: "Bowman" },
    ];

    expect(orderByProps(bowman)).toEqual(expected);
  });

  it("should sort by health and then in an alphabetic order", () => {
    const expected = [
      { key: "health", value: 100 },
      { key: "attack", value: 25 },
      { key: "defense", value: 25 },
      { key: "level", value: 1 },
      { key: "name", value: "Test" },
      { key: "type", value: "Bowman" },
    ];

    expect(orderByProps(bowman, ["health"])).toEqual(expected);
  });

  it("should sort by name, level, and then in an alphabetic order", () => {
    const expected = [
      { key: "name", value: "Test" },
      { key: "level", value: 1 },
      { key: "attack", value: 25 },
      { key: "defense", value: 25 },
      { key: "health", value: 100 },
      { key: "type", value: "Bowman" },
    ];

    expect(orderByProps(bowman, ["name", "level"])).toEqual(expected);
  });

  it("should sort by name, level, type, and then in an alphabetic order", () => {
    const expected = [
      { key: "name", value: "Test" },
      { key: "level", value: 1 },
      { key: "type", value: "Bowman" },
      { key: "attack", value: 25 },
      { key: "defense", value: 25 },
      { key: "health", value: 100 },
    ];

    expect(orderByProps(bowman, ["name", "level", "type"])).toEqual(expected);
  });

  it("should handle default sort when no property is found for custom sort", () => {
    const expected = [
      { key: "attack", value: 25 },
      { key: "defense", value: 25 },
      { key: "health", value: 100 },
      { key: "level", value: 1 },
      { key: "name", value: "Test" },
      { key: "type", value: "Bowman" },
    ];

    expect(orderByProps(bowman, ["somethingElse"])).toEqual(expected);
  });

  it("should handle custom sort when no property is found for custom sort", () => {
    const expected = [
      { key: "level", value: 1 },
      { key: "attack", value: 25 },
      { key: "defense", value: 25 },
      { key: "health", value: 100 },
      { key: "name", value: "Test" },
      { key: "type", value: "Bowman" },
    ];

    expect(orderByProps(bowman, ["level", "somethingElse"])).toEqual(expected);
  });
});
