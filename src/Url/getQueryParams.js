/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2019
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

const addParsedQueryToObject = ({ queryParams, queryName, newQueryValue }) => {
    const currentQueryValue = queryParams[queryName];

    if (!Array.isArray(currentQueryValue)) {
        queryParams[queryName] = [currentQueryValue, newQueryValue];
    }
    else {
        currentQueryValue.push(...getParsedQuery(newQueryValue, IS_RETURNING_ARRAY));
    }
};

const parseSingleQueryEntry = queryParams => queryEntry => {
    const [queryKey = "", newQueryValue = ""] = queryEntry.split("=");

    if (queryKey === "") return;

    const { isQueryArray, queryName } = getQueryProps(queryKey);

    if (queryParams.hasOwnProperty(queryName)) {
        addParsedQueryToObject({ queryParams, queryName, newQueryValue });
    }
    else {
        queryParams[queryName] = getParsedQuery(newQueryValue, isQueryArray);
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
