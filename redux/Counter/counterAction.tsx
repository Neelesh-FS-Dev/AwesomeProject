import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './counterActionType';
export const incrementCounterAction = parameter => {
  return {
    type: INCREMENT_COUNTER,
    payload: parameter,
  };
};
export const decrementCounterAction = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};
