/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
export default function warning(message) {
  /* eslint-disable no-console */
  if (typeof console === 'undefined' || typeof console.warn !== 'function') {
    return;
  }
  console.warn(message);
  /* eslint-enable no-console */
}
