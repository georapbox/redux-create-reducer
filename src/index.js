import isPlainObject from './utils/isPlainObject';
import warning from './utils/warning';

let isDev = false;

try {
  // is dev environment when not production;
  // easier to test without setting any environment variable
  isDev = process.env.NODE_ENV !== 'production';
} catch (error) {}

/**
 * Utility function to express Redux reducers as an object
 * mapping from action types to action handlers.
 *
 * @param {*} initialState The initial state of the reducer.
 * @param {Object.<String, Function>} handlers A plain object mapping action types to action handlers.
 * @returns {Function} A function that returns the next state tree, given the current state tree and the action to handle.
 */
export default function createReducer(initialState, handlers) {
  if (!isPlainObject(handlers)) {
    throw new TypeError('Action handlers must be plain objects.');
  }

  if (isDev && handlers.undefined) {
    warning('A reducer contains an undefined action type. Have you misspelled a constant? Currently looks like this:', handlers);
  }

  return function reducer(state = initialState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      const handler = handlers[action.type];

      if (typeof handler !== 'function') {
        throw new TypeError('Action handler must be a function.');
      }

      return handler(state, action);
    }

    return state;
  };
}
