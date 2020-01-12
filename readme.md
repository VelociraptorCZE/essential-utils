# Essential Utils

A random collection of various handy JavaScript utilities. 

## Array

### arrayChunk()

- Returns new array with chunked values from original array.

##### Parameters: array, [size = 1]

```js
import { arrayChunk } from "essential-utils";

arrayChunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
```

### arraySum()

- Returns sum of all values from passed array.

##### Parameters: array, fn, [defaultValue = 0]

```js
import { arraySum } from "essential-utils";

arraySum([1, 2, 3, 4]); // 10;
```

### numberRange()

- Returns range between two values in array.

##### Parameters: start, end, [step = 1]

```js
import { numberRange } from "essential-utils";

numberRange(0, 2); // [0, 1, 2];
numberRange(0, 3, 2); // [0, 2];
```

## Iterable

### iterableToObject()

- Transforms iterable which has forEach function implemented into object.

##### Parameters: iterable

```js
import { iterableToObject } from "essential-utils";

iterableToObject([0, 5]); // { 0: 0, 1: 5 }
iterableToObject(new Map([["number", 42]])); // { number: 42 }
```

### iterableToJson()

- Transforms iterable into JSON.

##### Parameters: iterable

## Object

### objectMap()

- Returns either new object or original object with mapped values.

##### Parameters: object, callback, isInPlace

```js
import { objectMap } from "essential-utils";

const object = { first: 2, second: 3 };

objectMap(object, value => value ** 2); // { first: 4, second: 8 }
console.log(object); // { first: 2, second: 3 }

objectMap(object, value => value ** 2, true); // { first: 4, second: 8 }
console.log(object); // { first: 4, second: 8 }
```

## Url

### getQueryParams()

- Parses url and returns object with key and value pairs from query.

##### Parameters: url

```js
import { getQueryParams } from "essential-utils";

getQueryParams("?a=5&b=4&a=6"); // { a: ["5", "6"], b: "4" }
getQueryParams("?a[]=5&b[]=4&a[]=6"); // { a: ["5", "6"], b: ["4"] }
getQueryParams("?a=5,6&b=4"); // { a: ["5", "6"], b: "4" }
getQueryParams("?a[]=5,6&b[]=4"); // { a: ["5", "6"], b: ["4"] }
```
