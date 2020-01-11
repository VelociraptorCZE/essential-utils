/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2020
 * MIT License
 */

export default (array, size = 1) => {
    const chunkedArray = [];
    const { length } = array;

    for (let i = 0; i < length; i += size) {
        chunkedArray.push(array.slice(i, i + size));
    }

    return chunkedArray;
};