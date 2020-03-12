import { State, Action, RootReducer, GetCalculatedValue, Payload, GetState } from './rootReducer.type';

export const ADD_VALUE = "ADD_VALUE";
export const SUBTRACT_VALUE = "SUBTRACT_VALUE";
export const MULTIPLY_VALUE = "MULTIPLY_VALUE";
export const DIVIDE_VALUE = "DIVIDE_VALUE";

export const addValue: Action = (inputValue1, inputValue2) => {
  return {
    type: ADD_VALUE,
    payload: {
      inputValue1,
      inputValue2
    }
  };
};

export const subtractValue: Action = (inputValue1, inputValue2) => {
  return {
    type: SUBTRACT_VALUE,
    payload: {
      inputValue1,
      inputValue2
    }
  }
};

export const multiplyValue: Action = (inputValue1, inputValue2) => {
  return {
    type: MULTIPLY_VALUE,
    payload: {
      inputValue1,
      inputValue2
    }
  }
};

export const divideValue: Action = (inputValue1, inputValue2) => {
  return {
    type: DIVIDE_VALUE,
    payload: {
      inputValue1,
      inputValue2
    }
  }
};

/**
 * calculate value for getState()
 * @param inputValue1
 * @param inputValue2
 * @param type
 */
export const getCalculatedValue: GetCalculatedValue = (inputValue1, inputValue2, type) => {
  switch (type) {
    case ADD_VALUE:
      return inputValue1 + inputValue2;
    case SUBTRACT_VALUE:
      return inputValue1 - inputValue2;
    case MULTIPLY_VALUE:
      return inputValue1 * inputValue2;
    case DIVIDE_VALUE:
      return inputValue2 === 0 ? 0 : inputValue1 / inputValue2;
    default:
      return 0;
  }
};

/**
 * create and return state
 * @param inputValue1
 * @param inputValue2
 * @param type
 */
export const getState: GetState = (inputValue1, inputValue2, type) => {
  return {
    inputValue1,
    inputValue2,
    outputValue: getCalculatedValue(inputValue1, inputValue2, type)
  }
};

const initialState: State = {
  inputValue1: 0,
  inputValue2: 0,
  outputValue: 0
};

/**
 * root reducer
 * @param state
 * @param action
 */
const rootReducer: RootReducer = (state = initialState, action) => {
  if (action.payload === undefined) {
    return state;
  }
  const {inputValue1, inputValue2}: Payload = action.payload;
  const actionType = action.type;
  switch (actionType) {
    case ADD_VALUE:
      return getState(inputValue1, inputValue2, actionType);
    case SUBTRACT_VALUE:
      return getState(inputValue1, inputValue2, actionType);
    case MULTIPLY_VALUE:
      return getState(inputValue1, inputValue2, actionType);
    case DIVIDE_VALUE:
      return getState(inputValue1, inputValue2, actionType);
    default:
      return state;
  }
};

export default rootReducer;