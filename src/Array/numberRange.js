/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

export default (start, end, step = 1) => {
    const rangeArray = [];
    let i = start;

    if (end > start) {
        for (; i <= end; i += step) {
            rangeArray.push(i);
        }
    }
    else {
        for (; i >= end; i -= step) {
            rangeArray.push(i);
        }
    }

    return rangeArray;
};