/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

export default iterable => {
    const object = {};
    iterable.forEach((value, key) => object[key] = value);
    return object;
};
