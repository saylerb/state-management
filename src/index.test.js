import { addReducer, addAction } from "./index";

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
