// some initialState

export const addAction = value => ({
  type: "ADD",
  value
});

export const addReducer = (state, action) => {
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
