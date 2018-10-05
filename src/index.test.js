import { add } from "./index";

test("can do addition", () => {
  const result = add(1, 2);

  expect(result).toEqual(3);
});
