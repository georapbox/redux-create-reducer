/**
 * Prints a warning in the console if it exists.
 *
 * @param {*} args The warning message or any other argument that needs to be printed.
 * @returns {void}
 */
export default function warning(...args) {
  /* eslint-disable no-console */
  /* istanbul ignore if  */
  if (typeof console === 'undefined' || typeof console.warn !== 'function') {
    return;
  }
  console.warn(...args);
  /* eslint-enable no-console */
}
