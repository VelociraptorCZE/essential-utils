import { deepStrictEqual, throws } from "assert";
import { getQueryParams } from "..";
import { QUERY_IS_NOT_STRING } from "../src/errorMessages";

describe("getQueryParams test", () => {
    it("exceptions", () => {
        throws(getQueryParams, TypeError, QUERY_IS_NOT_STRING);
        throws(() => getQueryParams(45), TypeError, QUERY_IS_NOT_STRING);
    });

    it("a bunch of possible urls", () => {
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
});