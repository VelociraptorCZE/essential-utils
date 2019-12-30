/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

// I don't want force people to add polyfill for Object.fromEntries, but here is better solution:
// Object.fromEntries(formData.entries()) or Object.fromEntries(formData)

// It's still necessary to include polyfill for FormData to make this work in older browsers

export default formData => {
    const formDataObject = {};

    formData.forEach(([key, value]) => {
        formDataObject[key] = value;
    });

    return formDataObject;
};
