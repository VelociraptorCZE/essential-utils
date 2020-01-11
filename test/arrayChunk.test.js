import { deepStrictEqual } from "assert";
import { arrayChunk } from "..";

describe("arrayChunk test", () => {
    it("Should return array with chunked values", () => {
        const testingArray = [1, 2, 3, 4, 5, 6];

        deepStrictEqual(arrayChunk(testingArray), [[1], [2], [3], [4], [5], [6]]);
        deepStrictEqual(arrayChunk(testingArray, 2), [[1, 2], [3, 4], [5, 6]]);
        deepStrictEqual(arrayChunk(testingArray, 4), [[1, 2, 3, 4], [5, 6]]);
    });
});