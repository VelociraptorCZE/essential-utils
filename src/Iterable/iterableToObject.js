/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default iterable => {
    const object = {};

    iterable.forEach(([key, value]) => {
        object[key] = value;
    });

    return object;
};
