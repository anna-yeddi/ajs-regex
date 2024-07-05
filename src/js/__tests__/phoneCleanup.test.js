import phoneCleanup from "../phoneCleanup";

const phones = [
  ["+1 202 000 00 00", "+12020000000"],
  ["+12020000000", "+12020000000"],
  ["+1.202.000.00.00", "+12020000000"],
  ["1.202.000.00.00", "+12020000000"],
  ["1 202 000 0000", "+12020000000"],
  ["8 (927) 000-00-00", "+79270000000"],
  ["+7 960 000 00 00", "+79600000000"],
  ["960 000 00 00", "+79600000000"],
  ["+86 000 000 0000", "+860000000000"],
];

describe("phoneCleanup", () => {
  test.each(phones)(
    "makes a phone number to be written in a unified format for %s",
    (phone, expected) => {
      const cleared = phoneCleanup(phone);

      expect(cleared).toBe(expected);
    }
  );
});
