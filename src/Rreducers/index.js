import counterReducer from './Counter';
import isLoggedReducer from './IsLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  logged: isLoggedReducer,
});

export default allReducers;
