/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export const QUERY_IS_NOT_STRING = "Given url isn't valid string.";

const arrayCheckRegex = /(?=.*)?\[]$/;

const getQueryProps = queryName => ({
    queryName: queryName.replace(arrayCheckRegex, ""),
    isQueryArray: arrayCheckRegex.test(queryName)
});

const addNewQueryToArray = (queryArray, queryValue) => {
    const isQueryValueArray = /,/.test(queryValue);

    if (isQueryValueArray) {
        queryArray.push(...queryValue.split(","));
    }
    else {
        queryArray.push(queryValue);
    }
};

const addParsedQueryToObject = ({ queryParams, queryName, isQueryArray, newQueryValue }) => {
    const currentQueryValue = queryParams[queryName];

    if (!Array.isArray(currentQueryValue) && isQueryArray) {
        queryParams[queryName] = [currentQueryValue, newQueryValue];
    }
    else {
        addNewQueryToArray(currentQueryValue, newQueryValue);
    }
};

const parseSingleQueryEntry = queryParams => queryEntry => {
    const [queryOriginalKey, newQueryValue] = queryEntry.split("=");

    if (queryOriginalKey === "" || newQueryValue === void 0) return;

    const { isQueryArray, queryName } = getQueryProps(queryOriginalKey);

    if (queryParams.hasOwnProperty(queryName)) {
        addParsedQueryToObject({ queryParams, queryName, isQueryArray, newQueryValue });
    }
    else {
        queryParams[queryName] = isQueryArray ? [newQueryValue] : newQueryValue;
    }
};

export default url => {
    const queryParams = {};

    if (typeof url !== "string") throw TypeError(QUERY_IS_NOT_STRING);

    const queryString = url.slice(url.indexOf("?") + 1);
    const parseSingleQueryEntryCallback = parseSingleQueryEntry(queryParams);

    queryString.split("&").forEach(parseSingleQueryEntryCallback);

    return queryParams;
};
