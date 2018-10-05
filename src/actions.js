export const addAction = value => ({
  type: "ADD",
  value
});

export const setErrorMessage = message => ({
  type: "ERROR_MESSAGE_SET",
  message
});

export const clearErrorMessage = () => ({
  type: "ERROR_MESSAGE_CLEARED"
});
