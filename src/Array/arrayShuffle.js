/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2020
 * MIT License
 */

export default array => {
    const { length } = array;

    for (let i = 0; i < length; ++i) {
        const currentValue = array[i];
        const randomIndex = Math.floor(Math.random() * length);
        array[i] = array[randomIndex];
        array[randomIndex] = currentValue;
    }

    return array;
};