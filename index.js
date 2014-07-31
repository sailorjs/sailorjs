/**
 * Dependencies
 */
var Translator = require('sailor-translate');
var translate = new Translator();

/**
 * Exports
 */
module.exports = {
  errorify  : require("sailor-errorify"),
  scripts   : require("sailor-scripts"),
  validator : require("validator"),
  translate : translate
};
