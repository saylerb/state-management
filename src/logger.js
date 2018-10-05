import { addLog } from "./actions";

const logger = ({ dispatch }) => {
  return next => action => {
    if ("LOG_ADDED" !== action.type) {
      const message = action.value + " was added";
      dispatch(addLog(message));
    }

    return next(action);
  };
};

export default logger;
