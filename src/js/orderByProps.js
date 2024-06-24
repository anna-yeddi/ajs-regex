/**
 * Method to create for an object a list of properties that are sorted in
 * a custom way, if requested, and/or in an alphabetic order.
 *
 * @param {Object} obj               - an object to sort its properties
 * @param {Array[String]} orderArray - ordered property keys for sorting
 * @returns {Array[Object]} orderedProps
 */
export default function orderByProps(obj, orderArray = []) {
  const orderedProps = [];
  const propsToSortCustom = [];
  const propsToSortByAlphabet = [];

  // Split properties by array for separate sorting
  for (const prop in obj) {
    orderArray.includes(prop)
      ? propsToSortCustom.push(prop)
      : propsToSortByAlphabet.push(prop);
  }

  // If there are any requested by orderArray properties found, sort:
  if (propsToSortCustom.length > 0) {
    propsToSortCustom.sort(
      (a, b) => orderArray.indexOf(a) - orderArray.indexOf(b)
    );
  }

  // Sort other properties by alphabet:
  propsToSortByAlphabet.sort();

  // Fill in an array to return with new sorted objects:
  for (const prop of [...propsToSortCustom, ...propsToSortByAlphabet]) {
    orderedProps.push({
      key: prop,
      value: obj[prop],
    });
  }

  return orderedProps;
}
