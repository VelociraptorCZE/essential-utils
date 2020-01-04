/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

const _parseValue = fn => value => fn ? fn(value) : value;

export default (array, fn, defaultValue = 0) => {
    const parseValue = _parseValue(fn);
    return array.reduce((x, y) => parseValue(x) + parseValue(y), defaultValue);
};