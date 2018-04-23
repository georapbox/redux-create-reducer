# redux-create-reducer

Utility function to express Redux reducers as an object mapping from action types to action handlers.

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
| handlers | <code>Object.&lt;String, function()&gt;</code> | A plain object mapping action types to action handlers. |

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
