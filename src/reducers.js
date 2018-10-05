export const addReducer = (state = { result: 0 }, action) => {
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

export const loggerReducer = (state = { logs: [] }, action) => {
  switch (action.type) {
    case "LOG_ADDED":
      return {
        ...state,
        logs: state.logs.concat(action.log)
      };
    default:
      return state;
  }
};
