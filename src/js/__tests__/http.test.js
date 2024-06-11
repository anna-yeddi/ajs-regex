import fetchData, { httpGet, httpPost } from "../http";

test("should throw while calling httpGet", () => {
  const url = "test.com";

  expect(() => httpGet(url)).toThrow("test.com");
  expect(() => httpGet("url")).toThrow(Error);
});

test("should throw while calling httpPost", () => {
  const url = "test.com";

  expect(() => httpPost(url)).toThrow(Error);
  expect(() => httpPost("url")).toThrow("url");
});

test("should throw while calling fetchData", () => {
  const url = "test.com";

  expect(() => fetchData(url)).toThrow(Error);
  expect(() => fetchData("url")).toThrow("Mock this!");
});
