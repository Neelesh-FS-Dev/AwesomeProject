import {createStore} from 'redux';
import counterReducer from './Counter/counterReducer';

// Passing counterReducer to createStore
const store = createStore(counterReducer);
export default store;
