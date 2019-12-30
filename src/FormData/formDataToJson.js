/**
 * Essential Utils
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import formDataToObject from "./formDataToObject";

export default formData => JSON.stringify(formDataToObject(formData));
