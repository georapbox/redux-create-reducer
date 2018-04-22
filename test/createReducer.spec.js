import createReducer from '../src';
import chai from 'chai';

const { expect } = chai;

describe('createReducer', () => {
  it('should return the initial state if action type does not match any action handler', () => {
    const initialState = [
      { text: 'Todo item 1' }
    ];

    const ADD_TODO = 'ADD_TODO';

    const actionHandlers = {};

    const reducer = createReducer(initialState, actionHandlers);

    const state = reducer(void 0, {
      type: ADD_TODO
    });

    expect(state).to.eql(initialState);
  });

  it('should return the correct state if action type matches an action handler', () => {
    const initialState = [
      { text: 'Todo item 1' }
    ];

    const ADD_TODO = 'ADD_TODO';

    const actionHandlers = {
      [ADD_TODO]: function addTodoHandler(state, action) {
        return [...state, { text: action.text }];
      }
    };

    const reducer = createReducer(initialState, actionHandlers);

    const state = reducer(void 0, {
      type: ADD_TODO,
      text: 'Todo item 2'
    });

    expect(state).to.have.lengthOf(2);

    expect(state).to.eql([
      { text: 'Todo item 1' },
      { text: 'Todo item 2' }
    ]);
  });

  it('should throw TypeError if action handlers is not a plain object', () => {
    expect(() => createReducer(void 0, 'not_plain_object')).to.throw(TypeError);
  });

  it('shoulf throw TypeError if the value of an action handler is not a function', () => {
    const ADD_TODO = 'ADD_TODO';

    const handlers = {
      [ADD_TODO]: 'not_a_function'
    };

    const reducer = createReducer(void 0, handlers);

    expect(() => reducer(void 0, { type: ADD_TODO })).to.throw(TypeError);
  });
});
