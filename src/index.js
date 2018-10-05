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
