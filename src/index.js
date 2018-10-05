const initialState = { result: 0 };

export const addAction = value => ({
  type: "ADD",
  value
});

export const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        result: state.result + action.value
      };
    default:
      return state;
  }
};

export const setErrorMessage = message => ({
  type: "ERROR_MESSAGE_SET",
  message
});

export const clearErrorMessage = () => ({
  type: "ERROR_MESSAGE_CLEARED"
});

export const errorReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case "ERROR_MESSAGE_SET":
      return {
        ...state,
        message: action.message
      };
    case "ERROR_MESSAGE_CLEARED":
      return {
        ...state,
        message: ""
      };
    default:
      return state;
  }
};
