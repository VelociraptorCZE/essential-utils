import { deepStrictEqual } from "assert";
import { iterableToObject } from "..";

describe("iterableToJson test", () => {
    it("some iterables to Object", () => {
        deepStrictEqual(iterableToObject(new Set([1, 3])), { 1: 1, 3: 3 });
        deepStrictEqual(iterableToObject(
            new Map([
                ["a", 1],
                ["b", 2],
            ])
        ), { a: 1, b: 2 });
    });
});