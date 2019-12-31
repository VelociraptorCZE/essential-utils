/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import formDataToObject from "./iterableToObject";

export default iterable => JSON.stringify(formDataToObject(iterable));
