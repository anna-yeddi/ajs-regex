import getLevel from "../getLevel";
import fetchData from "../http";

jest.mock("../http");

describe("getLevel", () => {
  it("should return the level when response status is ok", () => {
    const mockLevel = 10;
    fetchData.mockReturnValue({ status: "ok", level: mockLevel });

    const response = getLevel(1);
    expect(response).toEqual(`Your current level is: ${mockLevel}`);
  });

  it("should return an error message when response status is not ok", () => {
    fetchData.mockReturnValue({ status: "error" });

    const response = getLevel(1);
    expect(response).toBe(`The level information is currently unavailable`);
  });
});
