export default function phoneCleanup(str) {
  let phoneCode = "";
  const plusDigitRegex = /^\+\d/;
  const startsWithPlus = str.match(plusDigitRegex);

  if (startsWithPlus) {
    // i.e. "+7":
    phoneCode = startsWithPlus[0];
  } else {
    // i.e. "8"
    phoneCode = str[0];
  }

  // Assign the rest of the string to the number:
  let phoneNum = str.split(phoneCode)[1];

  // If no "+" is provided, assume either country code or "+" is skipped:
  if (phoneCode.length == 1) {
    switch (phoneCode) {
      case "1":
        phoneCode = "+1";
        break;
      case "8":
        phoneCode = "+7";
        break;
      default: // i.e. "960 000 00 00"
        phoneCode = "+7";
        phoneNum = str;
        break;
    }
  }

  // Remove any non-digit symbols from the number:
  phoneNum = phoneNum.replaceAll(/\D/g, "");

  return phoneCode + phoneNum;
}
