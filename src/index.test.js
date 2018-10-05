import { addReducer, addAction } from "./index";
import { createStore } from "redux";

test("action creator", () => {
  expect(addAction(3)).toEqual({ type: "ADD", value: 3 });
});

test("reducer returns new state of the world", () => {
  const state = addReducer({ result: 0 }, addAction(3));

  expect(state).toEqual({ result: 3 });
});

test("reducer has default initial state", () => {
  const state = addReducer(undefined, addAction(4));

  expect(state).toEqual({ result: 4 });
});

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
