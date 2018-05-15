# redux-create-reducer

Utility function to express Redux reducers as an object mapping from action types to action handlers.

[![npm version](https://img.shields.io/npm/v/@georapbox/redux-create-reducer.svg?style=flat-square)](https://www.npmjs.com/package/@georapbox/redux-create-reducer)
[![Travis](https://img.shields.io/travis/georapbox/redux-create-reducer/master.svg?style=flat-square)](https://travis-ci.org/georapbox/redux-create-reducer.svg?branch=master)
[![Codecov](https://img.shields.io/codecov/c/github/georapbox/redux-create-reducer/master.svg?style=flat-square)](https://codecov.io/gh/georapbox/redux-create-reducer)
[![Dependencies](https://david-dm.org/georapbox/redux-create-reducer.svg?style=flat-square)](https://david-dm.org/georapbox/redux-create-reducer)
[![devDependency Status](https://david-dm.org/georapbox/redux-create-reducer/dev-status.svg?style=flat-square)](https://david-dm.org/georapbox/redux-create-reducer#info=devDependencies)
[![npm license](https://img.shields.io/npm/l/@georapbox/redux-create-reducer.svg?style=flat-square)](https://www.npmjs.com/package/@georapbox/redux-create-reducer)

## Install

```sh
$ npm install --save @georapbox/redux-create-reducer
```

## API

### createReducer(initialState, handlers) ⇒ <code>function</code>

**Returns**: <code>function</code> - A function that returns the next state tree, given the current state tree and the action to handle.

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>\*</code> | The initial state of the reducer. |
| handlers | <code>Object.&lt;String, Function&gt;</code> | A plain object mapping action types to action handlers. |

## Usage

```js
import createReducer from '@georapbox/redux-create-reducer';

const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

const initialState = [];

const handlers = {
  [actionTypes.ADD_TODO]: function addTodoHandler(state, action) {
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ];
  },
  [actionTypes.TOGGLE_TODO]: function toggleTodoHandler(state, ation) {
    return state.map(todo =>
      todo.id === action.id
        ? {...todo, completed: !todo.completed}
        : todo
    );
  }
};

export const todosReducer = createReducer(initialState, handlers);
```

## License

[The MIT License (MIT)](https://georapbox.mit-license.org/@2018)
