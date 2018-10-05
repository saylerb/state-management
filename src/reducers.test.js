import {
  addAction,
  setErrorMessage,
  clearErrorMessage,
  addLog
} from "./actions";
import { addReducer, errorReducer, loggerReducer } from "./reducers";

describe("add", () => {
  test("reducer returns new state of the world", () => {
    const state = addReducer({ result: 0 }, addAction(3));

    expect(state).toEqual({ result: 3 });
  });

  test("reducer has default initial state", () => {
    const state = addReducer(undefined, addAction(4));

    expect(state).toEqual({ result: 4 });
  });
});

describe("error", () => {
  test("it can set an error message", () => {
    const state = errorReducer(
      { message: "" },
      setErrorMessage("Something went wrong")
    );

    expect(state).toEqual({ message: "Something went wrong" });
  });

  test("it can clear an error message", () => {
    const state = errorReducer({}, clearErrorMessage());

    expect(state).toEqual({ message: "" });
  });
});

describe("logger", () => {
  const state = loggerReducer({ logs: [] }, addLog("Hello this is a log"));

  expect(state).toEqual({ logs: ["Hello this is a log"] });
});
