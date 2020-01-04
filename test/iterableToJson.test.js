import { deepStrictEqual } from "assert";
import { iterableToJson } from "..";

describe("iterableToJson test", () => {
    it("some iterables to JSON", () => {
        deepStrictEqual(iterableToJson(["a", "b"]), '{"0":"a","1":"b"}');
    });
});