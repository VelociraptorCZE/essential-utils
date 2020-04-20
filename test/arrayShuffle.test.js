import { deepStrictEqual } from "assert";
import arrayShuffle from "../src/Array/arrayShuffle";

describe("arrayShuffle test", () => {
    it("Should return shuffled array, but in very improbable case could return array with same order", () => {
        const testingArray = [1, 2, 3, 4, 5, 6];

        deepStrictEqual(arrayShuffle(testingArray).length, 6);
        console.log(testingArray);
    });
});