import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import allReducers from '../Rreducers/index';

const initialState = {};
const middleware = [thunk];

// Store is the globalized state
//const store = createStore();

// Action is what you want to do
// Function that returns an object
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

// Reducer is how the actions transform state to state
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

const store = createStore(
  allReducers,
  initialState,
  applyMiddleware(...middleware)
);
store.subscribe(() => console.log(store.getState()));

// Dispatch is how to execute the action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
