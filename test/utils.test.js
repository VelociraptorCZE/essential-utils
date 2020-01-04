import { deepStrictEqual, throws } from "assert";
import { getQueryParams, iterableToObject, iterableToJson, objectMap, numberRange } from "..";
import { QUERY_IS_NOT_STRING } from "../src/errorMessages";
import { IN_PLACE } from "../src/flags";

describe("Essential utils test", () => {
    it("getQueryParams", () => {
        throws(getQueryParams, TypeError, QUERY_IS_NOT_STRING);
        throws(() => getQueryParams(45), TypeError, QUERY_IS_NOT_STRING);
        deepStrictEqual(
            getQueryParams("https://uriaddress.com?a[]=6&a[]=7&a[]=8&b=4&c[]=text"),
            { a: ["6", "7", "8"], b: "4", c: ["text"] }
        );
        deepStrictEqual(
            getQueryParams("https://uriaddress.com?array[]=45&array=65,60,98&array[]=35&array=89"),
            { array: ["45", "65", "60", "98", "35", "89"] }
        );
        deepStrictEqual(
            getQueryParams("https://uriaddress.com?a=53&a=65&a[]=6&a=54,65&i=54&i=34&a[]=554,32"),
            { a: ["53", "65", "6", "54", "65", "554", "32"], i: ["54", "34"] }
        );
        deepStrictEqual(
            getQueryParams("https://uriaddress.com?a=&b=&a=&c[]=&d[]=&d[]=&d="),
            { a: ["", ""], b: "", c: [""], d: ["", "", ""] }
        );
        deepStrictEqual(getQueryParams(""), {});
        deepStrictEqual(getQueryParams("a?d=,&d[]=&d=&d="), { d: ["", "", "", "", ""] });
        deepStrictEqual(
            getQueryParams("?a=5,6,7&b=6,7,5&c[]=T&c[]=t,S"),
            { a: ["5", "6", "7"], b: ["6", "7", "5"], c: ["T", "t", "S"] }
        );
        deepStrictEqual(getQueryParams("a?d"), { d: "" });
        deepStrictEqual(getQueryParams("a?d[]"), { d: [""] });
        deepStrictEqual(getQueryParams("?pf=38&pt=44"), { pf: "38", pt: "44" });
        deepStrictEqual(
            getQueryParams("?k=1&k=2&j=5&j=4,1&j=52&j=22"),
            { k: ["1", "2"], j: ["5", "4", "1", "52", "22"] }
        );
    });

    it("objectMap", () => {
        const testObj1 = { a: 1, b: 2, c: 3 };

        deepStrictEqual(
            objectMap(testObj1, value => value * 2),
            { a: 2, b: 4, c: 6 }
        );

        const mappedObj1 = objectMap(testObj1, value => value * 2);
        const mappedObj2 = objectMap(testObj1, value => value * 2, IN_PLACE);

        deepStrictEqual(mappedObj1 === testObj1, false);
        deepStrictEqual(mappedObj2 === testObj1, true);
    });

    it("iterableToObject", () => {
       deepStrictEqual(iterableToObject(new Set([1, 3])), { 1: 1, 3: 3 });
       deepStrictEqual(iterableToObject(
            new Map([
                ["a", 1],
                ["b", 2],
            ])
       ), { a: 1, b: 2 });
    });

    it("iterableToJson", () => {
        deepStrictEqual(iterableToJson(["a", "b"]), '{"0":"a","1":"b"}');
    });

    it("numberRange", () => {
        deepStrictEqual(numberRange(1, 5), [1, 2, 3, 4, 5]);
        deepStrictEqual(numberRange(1, 5, 2), [1, 3, 5]);
        deepStrictEqual(numberRange(1, 2, 3), [1]);
        deepStrictEqual(numberRange(1, 5, 3), [1, 4]);
        deepStrictEqual(numberRange(2, -4), [2, 1, 0, -1, -2, -3, -4]);
        deepStrictEqual(numberRange(2, -4, 2), [2, 0, -2, -4]);
    });
});