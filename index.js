/**
 * Dependencies
 */
var translate = require("sailor-translate");
var errorify  = require("sailor-errorify");

module.exports = {
  translate: translate,
  error: errorify.error,
  errorValidation : errorValidation
};


