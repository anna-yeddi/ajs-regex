export default class Validator {
  constructor(str) {
    this.str = str;
  }

  validateUsername() {
    // Only latin letters, dashes, underscores, and numbers are allowed
    // (case insensitive):
    const allowedSymbols = this.str.search(/^[A-Z\-_0-9]*$/gi) !== -1;

    // No more than 3 digits in a row:
    const notAllowedFourDigits = this.str.search(/[\d]{4,}/) === -1;

    // Not starting or ending with a digit, or an underscore, or a dash.
    const notAllowedStart = this.str.search(/^[^0-9\-_]/) !== -1;
    const notAllowedEnd = this.str.search(/[^0-9\-_]$/) !== -1;

    return (
      allowedSymbols && notAllowedStart && notAllowedFourDigits && notAllowedEnd
    );
  }
}
