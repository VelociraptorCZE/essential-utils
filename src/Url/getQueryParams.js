/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2019 - 2020
 * MIT License
 */

export const QUERY_IS_NOT_STRING = "Given url isn't valid string.";

const IS_RETURNING_ARRAY = true;

const arrayCheckRegex = /(?=.*)?\[]$/;

const getQueryProps = queryName => ({
    queryName: queryName.replace(arrayCheckRegex, ""),
    isQueryArray: arrayCheckRegex.test(queryName)
});

const getParsedQuery = (queryValue, isReturningArray) => {
    const queryValuesAsArray = queryValue.split(",");

    if (isReturningArray === IS_RETURNING_ARRAY) {
        return queryValuesAsArray;
    }

    return queryValuesAsArray.length > 1 ? queryValuesAsArray : queryValue;
};

const addParsedQueryToObject = ({ queryParams, queryName, queryValue }) => {
    const currentQueryValue = queryParams[queryName];
    queryValue = getParsedQuery(queryValue, IS_RETURNING_ARRAY);

    if (Array.isArray(currentQueryValue)) {
        currentQueryValue.push(...queryValue);
    }
    else {
        queryParams[queryName] = [currentQueryValue, ...queryValue];
    }
};

const parseSingleQueryEntry = queryParams => queryEntry => {
    const [queryKey, queryValue = ""] = queryEntry.split("=");

    if (queryKey === "") return;

    const { isQueryArray, queryName } = getQueryProps(queryKey);

    if (queryParams.hasOwnProperty(queryName)) {
        addParsedQueryToObject({ queryParams, queryName, queryValue });
    }
    else {
        queryParams[queryName] = getParsedQuery(queryValue, isQueryArray);
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
