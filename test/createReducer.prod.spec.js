import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';
import createReducer from '../src';

const { expect } = chai;

chai.use(sinonChai);

describe('createReducer (production environment)', () => {
  it('should NOT warn about undefined action type names in production environment', () => {
    const ADD_TODO = void 0;

    const actionHandlers = {
      [ADD_TODO]: function addTodoHandler(state, action) {
        return [...state, { text: action.text }];
      }
    };

    const spy = sinon.spy(console, 'warn');

    const reducer = createReducer([], actionHandlers);

    spy.restore();

    expect(spy).to.not.have.been.called;

    expect(reducer(void 0, { type: ADD_TODO })).to.eql([{ text: void 0 }]);
  });

  it('should NOT throw Error about undefined action type names in production environment if "throwForUndefinedHandlers" options is set', () => {
    const ADD_TODO = void 0;

    const actionHandlers = {
      [ADD_TODO]: function addTodoHandler(state, action) {
        return [...state, { text: action.text }];
      }
    };

    expect(() => createReducer({}, actionHandlers, {
      throwForUndefinedHandlers: true
    })).to.not.throw(Error);
  });
});
