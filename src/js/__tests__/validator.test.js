import Validator from "../validator.js";

const strings = [
  ["truthy-all_allowed", true],
  ["truthy-all_allowed_12cd-EF_d", true],
  ["truthy-CAPS_allowed_12cd-EF_d", true],
  ["falsy-has_dot.d", false],
  ["falsy-has-_comma,d", false],
  ["falsy-has_space d-", false],
  ["_falsy-starts_with_underscore", false],
  ["-falsy-starts_with_dash", false],
  ["0falsy-starts_with_digit", false],
  ["falsy-ends_with_underscore_", false],
  ["falsy-ends_with_dash-", false],
  ["falsy-ends_with_digit_0", false],
  ["truthy-3_digits_123a", true],
  ["falsy-more_than_3_digits_12345a", false],
  ["falsy-plus_sign_used+", false],
];

describe("Validator class", () => {
  describe("validateUsername", () => {
    test.each(strings)(
      "should validate that a username '%s' is (%s) valid",
      (str, expected) => {
        const response = new Validator(str).validateUsername();

        expect(response).toBe(expected);
      }
    );
  });
});
