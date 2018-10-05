import { addAction } from "./actions";

test("action creator", () => {
  expect(addAction(3)).toEqual({ type: "ADD", value: 3 });
});
