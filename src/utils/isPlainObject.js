/**
 * Check if the argument passed is a plain object.
 *
 * @param {*} value The object to inspect.
 * @returns {Boolean} True if the argument appears to be a plain object; otherwise false.
 */
export default function isPlainObject(value) {
  if (typeof value !== 'object' || value === null || {}.toString.call(value) !== '[object Object]') {
    return false;
  }

  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  let proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}
