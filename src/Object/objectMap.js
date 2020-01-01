/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

export const IN_PLACE = true;

export default (object, callback, isInPlace) => {
    if (isInPlace !== IN_PLACE) {
        object = { ...object };
    }

    for (const propertyKey in object) {
        if (object.hasOwnProperty(propertyKey)) {
            object[propertyKey] = callback(object[propertyKey], propertyKey, object);
        }
    }

    return object;
};