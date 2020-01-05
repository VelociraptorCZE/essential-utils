import { strictEqual } from "assert";
import arraySum from "../src/Array/arraySum";

describe("arraySum test", () => {
    it("Sum values in array", () => {
        strictEqual(arraySum([1, 2, 3]), 6);
        strictEqual(arraySum(["1", 2, 3]), "0123");
    });

    it("Sum values in array with changing its type", () => {
        strictEqual(arraySum([1, "2", 3], BigInt), 6n);
        strictEqual(arraySum(["1", 2, 3], String, ""), "123");
        strictEqual(arraySum(["1nf", 2, 3], parseInt), 6);
        strictEqual(arraySum(["1.4", 2.1, 3], parseFloat), 6.5);
    });
});