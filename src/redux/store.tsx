import {createStore} from 'redux';
import counterReducer from './Counter/counterReducers';

// Passing counterReducer to createStore
const store = createStore(counterReducer);
export default store;
