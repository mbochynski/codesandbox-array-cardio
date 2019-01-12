import { reduce } from "./array";

it("should be true", () => {
  expect(reduce([["key1", "value"], ["key2", "value2"]])).toEqual({
    key1: "value",
    key2: "value2"
  });
});
