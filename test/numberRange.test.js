import { deepStrictEqual } from "assert";
import { numberRange } from "..";

describe("numberRange test", () => {
    it("simple range with step === 1", () => {
        deepStrictEqual(numberRange(1, 5), [1, 2, 3, 4, 5]);
        deepStrictEqual(numberRange(2, -4), [2, 1, 0, -1, -2, -3, -4]);
    });

    it("range with step higher than 1", () => {
        deepStrictEqual(numberRange(1, 5, 2), [1, 3, 5]);
        deepStrictEqual(numberRange(1, 2, 3), [1]);
        deepStrictEqual(numberRange(1, 5, 3), [1, 4]);
        deepStrictEqual(numberRange(2, -4, 2), [2, 0, -2, -4]);
    })
});