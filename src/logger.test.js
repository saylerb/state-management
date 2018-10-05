import { addReducer, loggerReducer } from "./reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { addAction, addLog } from "./actions";
import logger from "./logger";

test("logger middleware", () => {
  const store = createStore(
    combineReducers({
      logger: loggerReducer,
      add: addReducer
    }),
    {},
    applyMiddleware(logger)
  );

  const dispatchSpy = jest.spyOn(store, "dispatch");

  store.dispatch(addAction(3));

  expect(store.getState()).toMatchObject({
    logger: { logs: expect.arrayContaining(["3 was added"]) }
  });

  expect(dispatchSpy).toHaveBeenCalledWith(addAction(3));

  // Can't do this because this is a copy of the real dispatch?
  //   expect(dispatchSpy).toHaveBeenCalledWith(addLog("3 was added"));
});
