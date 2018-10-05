import { addAction, setErrorMessage, clearErrorMessage } from "./actions";
import { addReducer, errorReducer } from "./reducers";
import { createStore, combineReducers } from "redux";

test("can dispatch() changes and use getState()", () => {
  const store = createStore(addReducer);

  store.dispatch(addAction(3));

  expect(store.getState()).toEqual({ result: 3 });
});

test("we can subscribe to changes to store's state", () => {
  const store = createStore(addReducer);

  const handleChange = jest.fn(() => {
    const result = store.getState().result;

    return `Hello, the value is ${result}`;
  });

  store.subscribe(handleChange);

  store.dispatch(addAction(3));

  expect(handleChange).toReturnWith("Hello, the value is 3");
});

test("can combine multiple reducers", () => {
  const store = createStore(
    combineReducers({
      add: addReducer,
      error: errorReducer
    })
  );

  store.dispatch(addAction(3));
  store.dispatch(setErrorMessage("Hello"));

  expect(store.getState()).toEqual({
    add: { result: 3 },
    error: { message: "Hello" }
  });
});

test("bind action creator demo", () => {
  const store = createStore(addReducer);
  const dispatchSpy = jest.spyOn(store, "dispatch");

  const demoBindActionCreator = (action, dispatch) => (...args) =>
    dispatch(action(...args));

  const boundAddAction = demoBindActionCreator(addAction, store.dispatch);

  boundAddAction(3);

  expect(dispatchSpy).toHaveBeenCalledWith(addAction(3));
});

test("bind action creatorz", () => {
  const store = createStore(
    combineReducers({
      add: addReducer,
      error: errorReducer
    })
  );

  const dispatchSpy = jest.spyOn(store, "dispatch");

  const demoBindActionCreator = (action, dispatch) => (...args) =>
    dispatch(action(...args));

  const demoBindActionCreators = (actions, dispatch) => {
    return Object.keys(actions).reduce((acc, action) => {
      acc[action] = demoBindActionCreator(actions[action], dispatch);
      return acc;
    }, {});
  };

  const boundActions = demoBindActionCreators(
    { addAction, setErrorMessage, clearErrorMessage },
    store.dispatch
  );

  boundActions.addAction(4);
  boundActions.setErrorMessage("This is a message");

  expect(dispatchSpy).toHaveBeenCalledWith(addAction(4));
  expect(dispatchSpy).toHaveBeenCalledWith(
    setErrorMessage("This is a message")
  );
});
