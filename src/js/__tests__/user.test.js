import { loadUser, saveUser } from "../user";
import { httpGet } from "../http";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test("should call httpGet once while calling loadUser", () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith("http://server:8080/users/1");
});

test("should throw while calling saveUser", () => {
  expect(() => saveUser({})).toThrow("Unimplemented");
  expect(() => saveUser()).toThrow(Error);
});
