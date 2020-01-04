import { deepStrictEqual } from "assert";
import { objectMap } from "..";
import { IN_PLACE } from "../src/flags";

describe("objectMap test", () => {
    const testObj1 = { a: 1, b: 2, c: 3 };

    it("basic map", () => {
        const mappedObj = objectMap(testObj1, value => value * 2);
        deepStrictEqual(mappedObj, { a: 2, b: 4, c: 6 });
        deepStrictEqual(mappedObj === testObj1, false);
    });

    it("object map in place", () => {
        const mappedObj2 = objectMap(testObj1, value => value * 2, IN_PLACE);
        deepStrictEqual(mappedObj2 === testObj1, true);
    });
});