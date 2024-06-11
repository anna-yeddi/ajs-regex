import getLevel from "../getLevel";
import fetchData from "../http";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test("should call fetchData once while calling getLevel", () => {
  // fetchData.mockReturnValue(JSON.stringify({}));
  const mockFetch = jest.fn().mockResolvedValue((this.status = "ok"));

  const response = getLevel(1);
  expect(response).toEqual(`The level information is currently unavailable`);
  expect(mockFetch).toHaveBeenCalledWith("https://server/user/1");
});

// test("should call fetchData once while calling getLevel", () => {
//   fetchData.mockReturnValue(JSON.stringify({}));

//   const response = getLevel([1].status);
//   expect(response).toEqual(`Your current level is: `);
// });
