/**
 * Check if the argument passed is a plain object.
 *
 * @param {*} obj The object to inspect.
 * @returns {Boolean} True if the argument appears to be a plain object; otherwise false.
 */
export default function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  let proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}
